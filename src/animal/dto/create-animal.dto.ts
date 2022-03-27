import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Coordinate } from '../schema/coordinate.schema';

export class CreateAnimalDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  nameplate: string;

  @ApiProperty()
  @IsString()
  scienceName: string;

  @ApiProperty()
  @IsMongoId()
  regnum: string;

  @ApiProperty()
  @IsMongoId()
  phylum: string;

  @ApiProperty()
  @IsMongoId()
  animalCls: string;

  @ApiProperty()
  @IsMongoId()
  ordo: string;

  @ApiProperty()
  @IsMongoId()
  familia: string;

  @ApiProperty()
  @IsArray()
  @Type(() => String)
  images: [string];

  @ApiProperty()
  @Type(() => Coordinate)
  coordinate: Coordinate[];

  @IsOptional()
  @ApiProperty()
  @IsString()
  morphological: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  ecological: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  value: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  IUCN: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  VRB: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  Decree: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  CITES: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  distribution: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  specimen: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  habitat: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  place: string;

  @ApiProperty()
  @IsString()
  collBy: string;

  @ApiProperty()
  @IsNumber()
  collAt: number;
}
