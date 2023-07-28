import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("User")
export class UserType{
     @Field()
     id:string

    @Field()
    firstName:string

    @Field()
    lastName: string

    @Field()
    email: string

    @Field()
    role: string

}