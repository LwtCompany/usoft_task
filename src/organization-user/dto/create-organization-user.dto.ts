
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateOrganizationUserDto {
  @ApiProperty({
    name: 'org_id',
    description: 'OrganizationId for example 1',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  org_id:number;

  @ApiProperty({
    name: 'user_id',
    description: 'who is the owner? currently 2',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  user_id:number;
}

