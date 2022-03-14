import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateScienceDto {
  @ApiProperty()
  @IsString()
  name: string;
}
