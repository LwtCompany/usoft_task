
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateOrganizationDto {
  @ApiProperty({
    name: 'name',
    description: 'Organization name',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name:string;

  @ApiProperty({
    name: 'created_by',
    description: 'who is the creator? currently 1',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  created_by:number;
}

