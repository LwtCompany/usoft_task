import {IsNotEmpty, IsString} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({
    name: 'name',
    description: 'User name',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name:string;

  @ApiProperty({
    name: 'role',
    description: 'use one of them user or owner',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  role:string;

  @ApiProperty({
    name: 'created_by',
    description: 'who is the creator? currently 1',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  created_by:number;
}
