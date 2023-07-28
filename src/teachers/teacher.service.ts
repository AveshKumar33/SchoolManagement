import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher, TeacherDocument } from './schema/teacher.schema';

@Injectable()
export class TeacherService {
  constructor(@InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>) {}

  async findAll(): Promise<Teacher[]> {
    return this.teacherModel.find().exec();
  }

  async findById(id: string): Promise<Teacher> {
    return this.teacherModel.findById(id).exec();
  }

  async create(teacherData: Partial<Teacher>): Promise<Teacher> {
    const newTeacher = new this.teacherModel(teacherData);
    return newTeacher.save();
  }

  async update(id: string, teacherData: Partial<Teacher>): Promise<Teacher> {
    return this.teacherModel.findByIdAndUpdate(id, teacherData, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.teacherModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
