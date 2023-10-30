import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  Res
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { RolesGuard } from "../guard/roles.guard";
import { Roles } from "../guard/roles.decorator";
import {Response} from "express";
import {  ApiTags } from "@nestjs/swagger";

@Controller('users')
@UseGuards(RolesGuard)
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles('admin')
 async create(@Body() createUserDto: CreateUserDto, @Res() res:Response) {
    try {
      const user = await  this.usersService.create(createUserDto);
      return res.status(201).send(user)
    }catch (e) {
      return  res.status(404).send({error: "createUser", message: `Message: ${e} `})
    }
  }

  @Get()
 async findAll( @Res() res:Response) {
    try {
      const users =  await  this.usersService.findAll();
      return  res.send(users)
    }catch (e) {
      return  res.status(404).send({error: "findAll", message: `Message: ${e} `})
    }

  }

  @Get(':id')
 async findOne(@Param('id') id: string, @Res() res:Response) {
    try {
      const user:User = await this.usersService.findOne(+id);
      return res.send(user)
    }catch (e) {

      return  res.status(404).send({error: "findOne", message: `Message: ${e} `})
    }

  }

  @Patch(':id')
  @Roles('admin')
 async update(@Param('id')  id: string, @Res() res:Response, @Body() updateUserDto: UpdateUserDto) {
    try {
      const user = await  this.usersService.update(+id, updateUserDto);

      return res.send(user)
    }catch (e) {
      return  res.status(404).send({error: "Update", message: `Message: ${e} `})
    }

  }

  @Delete(':id')
async  remove(@Param('id')  id: string, @Res() res:Response) {
    try {
        const user = await  this.usersService.remove(+id)
      return res.send(user)
    }catch (e) {
      return  res.status(404).send({error: "Delete", message: `Message: ${e} `})
    }
  }


  @Get('me/:id')
  async findMyTasksAndProjects(@Param('id') id: string, @Res() res:Response) {
    try {
      const user = await this.usersService.findMyProjects(+id);
      return res.send(user)
    }catch (e) {

      return  res.status(404).send({error: "findOne", message: `Message: ${e} `})
    }
  }


}
