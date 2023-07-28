import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { TeacherService } from "./teacher.service";
import { TeacherType } from "./type/teacherType";

@Resolver()
export class TeacherResolver {
  constructor(private teacherService: TeacherService) {}

  @Query(returns => String)
  teacher() {
    return "Hello, Avesh Katiyar!";
  }

  @Query(returns => [TeacherType])
  getTeachers() {
    return this.teacherService.findAll();
  }

  @Mutation(returns => TeacherType)
  createTeacher(
    @Args({ name: 'firstName', type: () => String }) firstName: string,
    @Args({ name: 'lastName', type: () => String }) lastName: string,
    @Args({ name: 'email', type: () => String }) email: string,
  ) {
    return this.teacherService.create({ firstName, lastName, email });
  }
}
