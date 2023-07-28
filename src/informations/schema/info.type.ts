import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("Info")
export class InfoType{
     @Field()
     id:string

    @Field()
    firstName:string

    @Field()
    lastName: string

    @Field()
    email: string

    @Field()
    address: string

    @Field()
    profile: string

}