import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("Teacher")
export class TeacherType {
    @Field()
    _id: string

    @Field()
    firstName: string

    @Field()
    lastName: string

    @Field()
    email: string

    @Field()
    subject: string;


}