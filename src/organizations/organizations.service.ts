import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { InjectModel } from "nest-knexjs";
import { Knex } from "knex";

@Injectable()
export class OrganizationsService {
  constructor(@InjectModel() private readonly knex: Knex) {}
 async create(createOrganizationDto: CreateOrganizationDto) {
    return this.knex.table('Organizations')
      .insert(createOrganizationDto)
      .returning("*");
  }

 async findAll() {
   return this.knex.select("*")
     .from('Organizations');
  }

 async findOne(id: number) {
   return this.knex.select("*")
     .where({"id":id})
     .from("Organizations").first();
  }

 async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return this.knex.where({"id":id})
      .from("Organizations")
      .update(updateOrganizationDto)
  }

 async remove(id: number) {
   return this.knex.where({"id":id})
     .from("Organizations")
     .delete();
  }
}
