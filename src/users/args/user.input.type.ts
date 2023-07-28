import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, MinLength, MaxLength, IsEmail, IsEnum } from 'class-validator';
import { UserRole } from "../userEnum/user.role";


@InputType()
export class UserInputType {

    @Field()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    firstName: string

    @Field()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    lastName: string

    @Field()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @Field()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string

    @Field(() => UserRole)
    @IsEnum(UserRole)
    role: UserRole

}

