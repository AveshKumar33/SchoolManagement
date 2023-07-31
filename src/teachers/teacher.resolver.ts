import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { TeacherService } from "./teacher.service";
import { TeacherType } from "./type/teacherType";
import { CreateTeacherInputType } from "./args/create.teacher.input.type";
import { UpdateTeacherInputType } from "./args/update.teacher.input.type";

@Resolver(of=>TeacherType)

export class TeacherResolver {
  constructor(private teacherService: TeacherService) {}


  @Query(returns =>[TeacherType])
  async getAllTeachers(){
    return this.teacherService.getTeachers()
  }


  @Mutation(returns=>TeacherType)
  async getTeacherById(
    @Args({ name: "id", type: () => String }) id:string
  ){
    return this.teacherService.getTeacher(id)
  }


  @Mutation(returns => TeacherType)
  async createTeacher(
    @Args({ name:'createTeacherInputType', type: () => CreateTeacherInputType }) createTeacherInputType: CreateTeacherInputType,
  ) {
    return this.teacherService.create(createTeacherInputType);
  }


  @Mutation(returns => TeacherType)
  async updateTeacher(
    @Args({ name: "updateTeacherInputType", type: () => UpdateTeacherInputType }) updateTeacherInputType:UpdateTeacherInputType
  ){
    return this.teacherService.update(updateTeacherInputType);
  }


  @Mutation(returns=>TeacherType)
  async deleteTeacher(
    @Args({ name: "id", type: () => String }) id :string
  ){
    return this.teacherService.deleteTeacher(id)
  }

}
