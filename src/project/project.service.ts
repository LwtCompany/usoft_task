import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectModel } from "nest-knexjs";
import { Knex } from "knex";

@Injectable()
export class ProjectService {
  constructor(@InjectModel() private readonly knex: Knex) {}
 async create(createProjectDto: CreateProjectDto) {
   return this.knex.table('Project')
     .insert(createProjectDto)
     .returning("*");
  }

 async findAll() {
   return this.knex.select("*")
     .from('Project');
  }

 async findOne(id: number) {
   return this.knex.select("*")
     .where({"id":id})
     .from("Project").first();
  }

 async update(id: number, updateProjectDto: UpdateProjectDto) {
   return this.knex.where({"id":id})
     .from("Project")
     .update(updateProjectDto)
  }

 async remove(id: number) {
    return this.knex.where({"id":id})
      .from("Project")
      .delete();
  }
}
