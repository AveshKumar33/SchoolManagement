import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher, TeacherDocument } from './schema/teacher.schema';
import { CreateTeacherInputType } from './args/create.teacher.input.type';
import { UpdateTeacherInputType } from './args/update.teacher.input.type';

@Injectable()
export class TeacherService {
  constructor(@InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>) { }


  async getTeachers(): Promise<Teacher[]> {
    return await this.teacherModel.find()
  }


  async getTeacher(id: string): Promise<Teacher> {
    return await this.teacherModel.findById({ _id: id })
  }


  async create(createTeacherInputType: CreateTeacherInputType): Promise<Teacher> {
    try {
      const newTeacher = new this.teacherModel(createTeacherInputType);
      const savedTeacher = await newTeacher.save();
      return savedTeacher;
    } catch (error) {
      // Check if the error is due to duplicate email
      if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
        throw new ConflictException('Email address already exists');
      }
      // If it's not a duplicate email error, re-throw the original error
      throw error;
    }
  }


  async update(updateTeacherInput: UpdateTeacherInputType): Promise<Teacher> {

    const { subject, email, firstName, lastName, _id } = updateTeacherInput;
    const teacher = await this.teacherModel.findOne({ _id: _id });

    if (!teacher) {
      throw new NotFoundException("Teacher not found");
    }

    if (firstName) {
      teacher.firstName = firstName;
    }
    if (lastName) {
      teacher.lastName = lastName;
    }
    if (email) {
      teacher.email = email;
    }
    if (subject) {
      teacher.subject = subject;
    }

    return teacher.save();
  }


  async deleteTeacher(id: string): Promise<Teacher> {
    const teacher = await this.teacherModel.findOne({ _id: id });
    if (!teacher) {
      throw new NotFoundException("Teacher not found");
    }
    return this.teacherModel.findByIdAndDelete({ _id: id })
  }

}
