import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsMongoId, IsNumber, IsString } from 'class-validator';
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

  @ApiProperty()
  @IsString()
  morphological: string;

  @ApiProperty()
  @IsString()
  ecological: string;

  @ApiProperty()
  @IsString()
  value: string;

  @ApiProperty()
  @IsString()
  IUCN: string;

  @ApiProperty()
  @IsString()
  VRB: string;

  @ApiProperty()
  @IsString()
  Decree: string;

  @ApiProperty()
  @IsString()
  CITES: string;

  @ApiProperty()
  @IsString()
  distribution: string;

  @ApiProperty()
  @IsString()
  specimen: string;

  @ApiProperty()
  @IsString()
  habitat: string;

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
