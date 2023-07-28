
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER"
}

export interface UserInputType {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
}

export interface Teacher {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

export interface IQuery {
    teacher(): string | Promise<string>;
    getTeachers(): Teacher[] | Promise<Teacher[]>;
}

export interface IMutation {
    createUser(userInputType: UserInputType): User | Promise<User>;
    createTeacher(firstName: string, lastName: string, email: string): Teacher | Promise<Teacher>;
}

type Nullable<T> = T | null;
