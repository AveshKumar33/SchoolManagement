import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("Teacher")
export class TeacherType{
     @Field()
     id:string

    @Field()
    firstName:string

    @Field()
    lastName: string

    @Field()
    email: string


}