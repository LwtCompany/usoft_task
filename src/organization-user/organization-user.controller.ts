import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res } from "@nestjs/common";
import { OrganizationUserService } from './organization-user.service';
import { CreateOrganizationUserDto } from './dto/create-organization-user.dto';
import { UpdateOrganizationUserDto } from './dto/update-organization-user.dto';
import { RolesGuard } from "../guard/roles.guard";
import { ApiTags } from "@nestjs/swagger";
import { Roles } from "../guard/roles.decorator";
import { Response } from "express";

@Controller('organization-user')
@UseGuards(RolesGuard)
@ApiTags('organization-user')
export class OrganizationUserController {
  constructor(private readonly organizationUserService: OrganizationUserService) {}

  @Post()
  @Roles('admin')
  async create(@Body() createOrganizationUserDto: CreateOrganizationUserDto,
               @Res() res:Response) {
    try {
      const orgUser = this.organizationUserService.create(createOrganizationUserDto);
      return res.status(201).send(orgUser)
    }catch (e) {
      return  res.status(404).send({error: "createUser", message: `Message: ${e} `})
    }
  }

  @Get()
  async findAll(@Res() res:Response) {
    try {
      const orgUsers =  await  this.organizationUserService.findAll();
      return  res.send(orgUsers)
    }catch (e) {
      return  res.status(404).send({error: "findAll", message: `Message: ${e} `})
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string,
                @Res() res:Response) {
    try {
      const orgUser = await this.organizationUserService.findOne(+id);
      return res.send(orgUser)
    }catch (e) {
      return  res.sendStatus(404).send({error: "findOne", message: `Message: ${e} `})
    }
  }

  @Patch(':id')
 async update(@Param('id') id: string,
              @Body() updateOrganizationUserDto: UpdateOrganizationUserDto,
              @Res() res:Response,) {
    try {
      const orgUser = await this.organizationUserService.update(+id, updateOrganizationUserDto);
      return res.send(orgUser)
    }catch (e) {
      return  res.status(404).send({error: "Update", message: `Message: ${e} `})
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res:Response) {
    try {
      const orgUser = await this.organizationUserService.remove(+id);
      return res.send(orgUser)
    }catch (e) {
      return  res.status(404).send({error: "Delete", message: `Message: ${e} `})
    }
  }
}
