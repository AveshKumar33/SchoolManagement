import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserType } from "./type/user.type";
import { UserService } from "./user.service";
import { CreateUserInputType } from "./args/create.user.input.type";
import { Public } from "src/shared/public.decorator";



@Resolver(() => UserType)
export class UserResolver {
    constructor(private userService: UserService) { }

    @Mutation(returns => UserType)
    @Public()
    createUser(
        @Args({ name: 'userInputType', type: () => CreateUserInputType }) userInputType: CreateUserInputType
    ) {
        return this.userService.registerUser(userInputType)
    }

    @Query(returns => [UserType])
    @Public()
    getAllUsers() {
        return this.userService.getUsers()
    }

    @Query(returns => UserType)
    getUserById(
        @Args('id') id: string
    ) {
        return this.userService.getUserById(id)
    }
}
