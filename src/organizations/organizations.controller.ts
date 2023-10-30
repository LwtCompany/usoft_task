import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res } from "@nestjs/common";
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { RolesGuard } from "../guard/roles.guard";
import { ApiTags } from "@nestjs/swagger";
import { Roles } from "../guard/roles.decorator";
import { Response } from "express";


@Controller('organizations')
@UseGuards(RolesGuard)
@ApiTags('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  @Roles('admin')
  create(@Body() createOrganizationDto: CreateOrganizationDto,
         @Res() res:Response) {
    try {
      const org = this.organizationsService.create(createOrganizationDto);
      return res.status(201).send(org)
    }catch (e) {
      return  res.status(404).send({error: "create", message: `Message: ${e} `})
    }
  }

  @Get()
async  findAll( @Res() res:Response) {
    try {
      const orgs =  await  this.organizationsService.findAll();
      return  res.send(orgs)
    }catch (e) {
      return  res.status(404).send({error: "findAll", message: `Message: ${e} `})
    }
  }

  @Get(':id')
 async findOne(@Param('id') id: string,
               @Res() res:Response) {
    try {
      const org = await this.organizationsService.findOne(+id);
      return res.send(org)
    }catch (e) {
      return  res.sendStatus(404).send({error: "findOne", message: `Message: ${e} `})
    }
  }

  @Patch(':id')
  @Roles('admin')
 async update(@Param('id') id: string,
              @Res() res:Response,
              @Body() updateOrganizationDto: UpdateOrganizationDto) {
    try {
      const org = await  this.organizationsService.update(+id, updateOrganizationDto);
      return res.send(org)
    }catch (e) {
      return  res.status(404).send({error: "Update", message: `Message: ${e} `})
    }
  }

  @Delete(':id')
 async remove(@Param('id') id: string, @Res() res:Response) {
    try {
      const org = await this.organizationsService.remove(+id);
      return res.send(org)
    }catch (e) {
      return  res.status(404).send({error: "Delete", message: `Message: ${e} `})
    }
  }
}
