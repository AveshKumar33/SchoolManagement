import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
const { v4: uuidv4 } = require('uuid')
import { Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { CreateUserInputType } from "./args/create.user.input.type";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) public readonly userRepository: Repository<User>) { }

    async registerUser(userInputType:CreateUserInputType): Promise<User> {
        const salt = await bcrypt.genSalt();
        const {firstName, lastName, email, password, role}=userInputType;
        const hashPassword = await bcrypt.hash(password, salt);
        const user = this.userRepository.create({
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashPassword,
            role: role
        })
        this.userRepository.save(user)
        return user
    }

    async getUsers():Promise<User[]>{
        return await this.userRepository.find()
    }
    async getUserById(id:string):Promise<User>{
        return await this.userRepository.findOne({where:{id:id}})
    }
    //--------------------------------------authentication--------------------------------------------------

    async findByEmail(email:string): Promise<User> {
        return this.userRepository.findOne({ where: { email: email } });
    }
}
