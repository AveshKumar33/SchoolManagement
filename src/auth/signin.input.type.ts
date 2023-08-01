import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, MinLength, MaxLength, IsEmail, IsEnum } from 'class-validator';



@InputType()
export class SignInUserInputType {

    @Field({ nullable: false })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    username: string

    @Field({ nullable: false })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    pass: string
}

