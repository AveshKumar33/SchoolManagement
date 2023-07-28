import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserType } from "./type/user.type";
import { UserService } from "./user.service";
import { UserInputType } from "./args/user.input.type";
const { v4: uuidv4 } = require('uuid');




@Resolver(Of => UserType)
export class UserResolver {
    constructor(private userService: UserService) { }

    // @Mutation(returns => UserType)
    // createUser(
    //     @Args({ name: 'firstName', type: () => String }) firstName: string,
    //     @Args({ name: 'lastName', type: () => String }) lastName: string,
    //     @Args({ name: 'role', type: () => String }) role: string,
    //     @Args({ name: 'email', type: () => String }) email: string,
    //     @Args({ name: 'password', type: () => String }) password: string,
    // ) {
    //     return this.userService.registerUser(firstName, lastName, email, password, role)
    // }

    @Mutation(returns => UserType)
    createUser(
        @Args('userInputType') userInputType: UserInputType
    ) {
        return this.userService.registerUser(userInputType)
    }


}
