import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { InfoType } from "./schema/info.type";
import { InfoService } from "./info.service";

const { v4: uuidv4 } = require('uuid');




@Resolver(Of => InfoType)
export class InfoResolver {
    constructor(private infoService: InfoService) { }

    @Query(returns => String)
    user() {
        const uuid = uuidv4();
        console.log(uuid);
        // console.log(typeof (uuid));
        return `hello avesh katiyar -->> ${typeof (uuid)}`
    }


    @Mutation(returns => String)
    createUserInfo(
        @Args({ name: 'firstName', type: () => String }) firstName: string,
        @Args({ name: 'lastName', type: () => String }) lastName: string,
        @Args({ name: 'profile', type: () => String }) profile: string,
        @Args({ name: 'email', type: () => String }) email: string,
        @Args({ name: 'address', type: () => String }) address: string,
    ) {
        return this.infoService.userInformation(firstName, lastName, email, address, profile)
    }




}