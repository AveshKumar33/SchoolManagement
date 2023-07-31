import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, MinLength, MaxLength, IsEmail, IsEnum } from 'class-validator';


@InputType()
export class UpdateTeacherInputType {

    @Field({ nullable: false })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    _id: string

    @Field({ nullable: true })
    // @IsString()
    // @IsNotEmpty()
    // @MinLength(3)
    // @MaxLength(50)
    firstName?: string;

    @Field({ nullable: true })
    // @IsString()
    // @IsNotEmpty()
    // @MinLength(3)
    // @MaxLength(50)
    lastName?: string;

    @Field({ nullable: true })
    // @IsString()
    // @IsNotEmpty()
    // @IsEmail()
    email?: string

    @Field({ nullable: true })
    // @IsString()
    // @IsNotEmpty()
    // @MinLength(3)
    // @MaxLength(50)
    subject?: string

}


