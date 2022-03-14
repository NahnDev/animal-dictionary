import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class Coordinate {
  @ApiProperty()
  @IsString()
  @Prop()
  x: string;

  @ApiProperty()
  @IsString()
  @Prop()
  y: string;
}
