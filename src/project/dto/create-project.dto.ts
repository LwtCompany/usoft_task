
import { IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateProjectDto {
  @ApiProperty({
    name: 'org_id',
    description: 'Organization id',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  org_id:number;

  @ApiProperty({
    name: 'created_by',
    description: 'who is the creator? currently 1',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  created_by:number;
}


