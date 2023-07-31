import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeacherDocument = Teacher & Document;

@Schema()
export class Teacher {
  @Prop(
    {
      type: String,
      required: true
    }
  )
  firstName: string;

  @Prop(
    {
      type: String,
      required: true
    }
  )
  lastName: string;

  @Prop(
    {
      type: String,
      required: true,
      unique:true
    }
  )
  email: string;

  @Prop(
    {
      type: String,
      required: true
    }
  )
  subject: string;

}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
