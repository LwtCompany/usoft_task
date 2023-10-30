import { Injectable } from '@nestjs/common';
import { CreateOrganizationUserDto } from './dto/create-organization-user.dto';
import { UpdateOrganizationUserDto } from './dto/update-organization-user.dto';
import { InjectModel } from "nest-knexjs";
import { Knex } from "knex";

@Injectable()
export class OrganizationUserService {
  constructor(@InjectModel() private readonly knex: Knex) {}
async  create(createOrganizationUserDto: CreateOrganizationUserDto) {
    return this.knex.table('OrganizationUser')
      .insert(createOrganizationUserDto)
      .returning("*");
  }

 async findAll() {
   return this.knex.select("*")
     .from('OrganizationUser');

  }

 async findOne(id: number) {
   return this.knex.select("*")
     .where({"id":id})
     .from("OrganizationUser").first();
  }

  async update(id: number, updateOrganizationUserDto: UpdateOrganizationUserDto) {
    return this.knex.where({"id":id})
      .from("OrganizationUser")
      .update(updateOrganizationUserDto)
  }

  async remove(id: number) {
    return this.knex.where({"id":id})
      .from("OrganizationUser")
      .delete();
  }
}
