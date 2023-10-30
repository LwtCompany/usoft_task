import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from "nest-knexjs";
import { Knex } from "knex";

@Injectable()
export class TaskService {
  constructor(@InjectModel() private readonly knex: Knex) {}
async  create(createTaskDto: CreateTaskDto) {
  return this.knex.table('Task')
    .insert(createTaskDto)
    .returning("*");
  }

 async findAll() {
   return this.knex.select("*")
     .from('Task');
  }

 async findOne(id: number) {
   return this.knex.select("*")
     .where({"id":id})
     .from("Task").first();
  }

 async update(id: number, updateTaskDto: UpdateTaskDto) {
   return this.knex.where({"id":id})
     .from("Task")
     .update(updateTaskDto)
  }

 async remove(id: number) {
   return this.knex.where({"id":id})
     .from("Task")
     .delete();
  }
}
