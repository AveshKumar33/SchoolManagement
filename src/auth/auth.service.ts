import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { SignInUserInputType } from './signin.input.type';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService,
        private jwtService: JwtService) { }

    async signIn(signInUserInputType: SignInUserInputType): Promise<any> {
        const { username, pass } = signInUserInputType
        const user = await this.usersService.findByEmail(username);
        console.log("user data===----->>", user);
        const isMatch = await bcrypt.compare(pass, user?.password);
        console.log("user isMatch===----->>", isMatch);
        if (! isMatch) {
            throw new UnauthorizedException();
        }
        // const { password, ...result } = user;
        // TODO: Generate a JWT and return it here
        // instead of the user object
        // return result
        const payload = { id: user.id, email: user.email };
        console.log("user payload===----->>", payload);
        const createToken = await this.jwtService.signAsync(payload)
        console.log("user createToken===----->>", createToken);
        return createToken;
        // return {
        //     access_token: await this.jwtService.signAsync(payload),
        // };
    }
}