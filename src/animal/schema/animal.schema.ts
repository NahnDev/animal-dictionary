import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { SchemaTypes } from 'mongoose';
import { ExposeId } from 'src/helper/expose-id.decorator';
import { AnimalCls } from '../../science-info/schemas/animalCls.schema';
import { Coordinate } from './coordinate.schema';
import { Familia } from '../../science-info/schemas/familia.schema';
import { Ordo } from '../../science-info/schemas/ordo.schema';
import { Phylum } from '../../science-info/schemas/phylum.schema';
import { Regnum } from '../../science-info/schemas/regnum.schema';

@Schema()
export class Animal {
  @ExposeId()
  @ApiProperty()
  _id: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  name: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  nameplate: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  scienceName: string;

  @ApiProperty()
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'Regnum',
    autopopulate: true,
  })
  regnum: Regnum;

  @ApiProperty()
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'Phylum',
    autopopulate: true,
  })
  phylum: Phylum;

  @ApiProperty()
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'AnimalCls',
    autopopulate: true,
  })
  animalCls: AnimalCls;

  @ApiProperty()
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'Ordo',
    autopopulate: true,
  })
  ordo: Ordo;

  @ApiProperty()
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'Familia',
    autopopulate: true,
  })
  familia: Familia;

  // specical
  @ApiProperty()
  @Prop({ type: [String] })
  images: [string];

  @ApiProperty()
  @Prop([Coordinate])
  coordinate: Coordinate[];

  @ApiProperty()
  @Prop({ type: String, required: true })
  morphological: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  ecological: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  value: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  IUCN: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  VRB: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  Decree: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  CITES: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  distribution: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  specimen: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  habitat: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  place: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  collBy: string;

  @ApiProperty()
  @Prop({ type: Number, required: true })
  collAt: number;

  @ApiProperty()
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'User',
    autopopulate: true,
  })
  createBy: string;

  @ApiProperty()
  @Prop({ type: Number, default: Date.now, required: true })
  createAt: number;
}

export type AnimalDoc = Animal & Document;
export const AnimalSchema = SchemaFactory.createForClass(Animal);
AnimalSchema.methods.toJSON = function (): Animal {
  return plainToInstance(Animal, this.toObject());
};
