import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res } from "@nestjs/common";
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { RolesGuard } from "../guard/roles.guard";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { Roles } from "../guard/roles.decorator";

@Controller('task')
@UseGuards(RolesGuard)
@ApiTags('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @Roles('owner')
 async create(@Body() createTaskDto: CreateTaskDto,
              @Res() res:Response) {
    try {
      const task =  this.taskService.create(createTaskDto);
      return res.status(201).send(task)
    }catch (e) {
      return  res.status(404).send({error: "create", message: `Message: ${e} `})
    }

  }

  @Get()
 async findAll( @Res() res:Response) {
    try {
      const project = await  this.taskService.findAll();
      return res.send(project)
    }catch (e) {
      return  res.sendStatus(404).send({error: "findOne", message: `Message: ${e} `})
    }

  }

  @Get(':id')
 async findOne(@Param('id') id: string,@Res() res:Response) {
    try {
      const tasks =  await  this.taskService.findOne(+id);
      return  res.send(tasks)
    }catch (e) {
      return  res.status(404).send({error: "findAll", message: `Message: ${e} `})
    }

  }

  @Patch(':id')
  @Roles('owner', 'user')
 async update(@Param('id') id: string,
         @Body() updateTaskDto: UpdateTaskDto,
         @Res() res:Response) {
    try {
      const task = await this.taskService.update(+id, updateTaskDto);
      return res.send(task)
    }catch (e) {
      return  res.status(404).send({error: "Update", message: `Message: ${e} `})
    }


  }

  @Delete(':id')
 async remove(@Param('id') id: string,
              @Res() res:Response) {
    try {
      const task = await  this.taskService.remove(+id);
      return res.send(task)
    }catch (e) {
      return  res.status(404).send({error: "Delete", message: `Message: ${e} `})
    }

  }
}
