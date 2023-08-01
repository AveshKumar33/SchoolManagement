import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserType } from 'src/users/type/user.type';
import { AuthService } from './auth.service';
import { HttpCode, HttpStatus } from '@nestjs/common';
import { SignInUserInputType } from './signin.input.type';
import { Public } from 'src/shared/public.decorator';


@Resolver(Of => UserType)
export class AuthResolver {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Mutation(returns => String)
    @Public()
    signIn(@Args({ name: "signInUserInputType", type: () => SignInUserInputType }) signInUserInputType: SignInUserInputType) {
        const token = this.authService.signIn(signInUserInputType);
        console.log("token", token);
        return token
        //   return JSON.stringify(token);
    }
}
