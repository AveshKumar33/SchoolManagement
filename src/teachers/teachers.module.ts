import { Module } from '@nestjs/common';
import { Teacher, TeacherSchema } from './schema/teacher.schema';
import { TeacherResolver } from './teacher.resolver';
import { TeacherService } from './teacher.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }])],
  exports: [TeacherService], // Export the TeacherService here
  providers: [TeacherResolver, TeacherService],
})
export class TeacherModule {}

