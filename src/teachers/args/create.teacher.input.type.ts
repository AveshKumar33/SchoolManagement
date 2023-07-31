import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, MinLength, MaxLength, IsEmail, IsEnum } from 'class-validator';


@InputType()
export class CreateTeacherInputType {

    @Field({ nullable: false })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    firstName: string

    @Field({ nullable: false })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    lastName: string

    @Field({ nullable: false })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @Field({ nullable: false })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    subject: string

}

