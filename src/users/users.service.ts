import { HttpException, HttpStatus, Injectable, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Knex } from "knex";
import { InjectModel } from "nest-knexjs";
import { User } from "./entities/user.entity";
import { RolesUser } from "./roles.enum";
import { RolesGuard } from "../guard/roles.guard";


@Injectable()
@UseGuards(RolesGuard)
export class UsersService {

  constructor(@InjectModel() private readonly knex: Knex) {}


 async create(createUserDto: CreateUserDto) {
     return this.knex.table('users')
       .insert(createUserDto)
       .returning("*");
 }


 async findAll(): Promise<User[]> {
   return this.knex.select("*")
     .from('users');
  }

 async findOne(id: number):Promise<User> {
    return this.knex.select("*")
      .where({"id":id})
      .from("users").first();
  }

 async update(id: number, updateUserDto: UpdateUserDto):Promise<number> {
    return this.knex.where({"id":id})
      .from("users")
      .update(updateUserDto)
  }

 async remove(id: number):Promise<number> {
    return this.knex.where({"id":id})
      .from("users")
      .delete();
  }

  async findMyProjects(id: number){
    return this.knex.select("*")
      .from('Project')
      .where('Project.created_by', '=', id)
      .innerJoin('Task','Project.created_by', '=', 'Task.created_by')
  }
}
