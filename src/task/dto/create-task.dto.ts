

import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateTaskDto {
  @ApiProperty({
    name: 'created_by',
    description: 'who is the creator? currently 2',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  created_by:number;

  @ApiProperty({
    name: 'project_id',
    description: 'Project id',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  project_id:number;

  @ApiProperty({
    name: 'due_date',
    description: 'When it have to done unix date',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  due_date:number;

  @ApiProperty({
    name: 'worker_user_id',
    description: 'worker user id currently 5 ',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  worker_user_id:number;

  @ApiProperty({
    name: 'done_at',
    description: 'When project done date at the unix time'
  })
  @IsNumber()
  done_at:number;

  @ApiProperty({
    name: 'status',
    description: 'Project status CREATED PENDING DONE',
    required: true
  })
  @IsNotEmpty()
  @IsString()
  status:string;

}

