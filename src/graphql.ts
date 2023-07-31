
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

export interface CreateTeacherInputType {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
}

export interface UpdateTeacherInputType {
    _id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    subject?: Nullable<string>;
}

export interface Teacher {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

export interface IQuery {
    getAllUsers(): User[] | Promise<User[]>;
    getAllTeachers(): Teacher[] | Promise<Teacher[]>;
}

export interface IMutation {
    createUser(userInputType: UserInputType): User | Promise<User>;
    getTeacherById(id: string): Teacher | Promise<Teacher>;
    createTeacher(createTeacherInputType: CreateTeacherInputType): Teacher | Promise<Teacher>;
    updateTeacher(updateTeacherInputType: UpdateTeacherInputType): Teacher | Promise<Teacher>;
    deleteTeacher(id: string): Teacher | Promise<Teacher>;
}

type Nullable<T> = T | null;
