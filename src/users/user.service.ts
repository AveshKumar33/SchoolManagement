import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
const { v4: uuidv4 } = require('uuid')
import { Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { UserType } from "./type/user.type";
import { UserInputType } from "./args/user.input.type";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) public readonly userRepository: Repository<User>) { }

    async registerUser(userInputType:UserInputType): Promise<UserType> {
        const {firstName, lastName, email, password, role}=userInputType;
        const user = this.userRepository.create({
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: role
        })
        this.userRepository.save(user)
        return user
    }

}