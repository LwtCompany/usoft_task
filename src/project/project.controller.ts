import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res } from "@nestjs/common";
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { RolesGuard } from "../guard/roles.guard";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { Roles } from "../guard/roles.decorator";

@Controller('project')
@UseGuards(RolesGuard)
@ApiTags('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @Roles('owner')
async  create(@Body() createProjectDto: CreateProjectDto,
              @Res() res:Response) {
    try {
      const project =  this.projectService.create(createProjectDto);
      return res.status(201).send(project)
    }catch (e) {
      return  res.status(404).send({error: "create", message: `Message: ${e} `})
    }
  }

  @Get()
  async findAll(@Res() res:Response) {
    try {
      const projects =  await   this.projectService.findAll();
      return  res.send(projects)
    }catch (e) {
      return  res.status(404).send({error: "findAll", message: `Message: ${e} `})
    }

  }

  @Get(':id')
async  findOne(@Param('id') id: string,
               @Res() res:Response) {
    try {
      const project = await this.projectService.findOne(+id);
      return res.send(project)
    }catch (e) {
      return  res.sendStatus(404).send({error: "findOne", message: `Message: ${e} `})
    }
  }

  @Patch(':id')
  @Roles('owner')
 async update(@Param('id') id: string,
              @Body() updateProjectDto: UpdateProjectDto,
              @Res() res:Response) {
    try {
      const project = await this.projectService.update(+id, updateProjectDto);
      return res.send(project)
    }catch (e) {
      return  res.status(404).send({error: "Update", message: `Message: ${e} `})
    }

  }

  @Delete(':id')
 async remove(@Param('id') id: string,
              @Res() res:Response) {
    try {
      const project = await this.projectService.remove(+id);
      return res.send(project)
    }catch (e) {
      return  res.status(404).send({error: "Delete", message: `Message: ${e} `})
    }
  }
}
