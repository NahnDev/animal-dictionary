import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { plainToInstance, Type } from 'class-transformer';
import { SchemaTypes } from 'mongoose';
import { ExposeId } from 'src/helper/expose-id.decorator';
import { AnimalCls } from '../../science-info/schemas/animalCls.schema';
import { Coordinate } from './coordinate.schema';
import { Familia } from '../../science-info/schemas/familia.schema';
import { Ordo } from '../../science-info/schemas/ordo.schema';
import { Phylum } from '../../science-info/schemas/phylum.schema';
import { Regnum } from '../../science-info/schemas/regnum.schema';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { Transform } from 'class-transformer';

@Schema()
export class Animal {
  @ExposeId()
  @ApiProperty()
  _id: string;

  @ApiProperty()
  @Prop({ type: String, required: true, text: true })
  name: string;

  @ApiProperty()
  @Prop({ type: String, required: true, text: true })
  nameplate: string;

  @ApiProperty()
  @Prop({ type: String, required: true, text: true })
  scienceName: string;

  @Type(() => Regnum)
  @ApiProperty()
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'Regnum',
    autopopulate: true,
  })
  regnum: Regnum;

  @Type(() => Phylum)
  @ApiProperty()
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'Phylum',
    autopopulate: true,
  })
  phylum: Phylum;

  @Type(() => AnimalCls)
  @ApiProperty()
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'AnimalCls',
    autopopulate: true,
  })
  animalCls: AnimalCls;

  @Type(() => Ordo)
  @ApiProperty()
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'Ordo',
    autopopulate: true,
  })
  ordo: Ordo;

  @Type(() => Familia)
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
  @Prop({ type: String, default: '' })
  morphological: string;

  @ApiProperty()
  @Prop({ type: String, default: '' })
  ecological: string;

  @ApiProperty()
  @Prop({ type: String, default: '' })
  value: string;

  @ApiProperty()
  @Prop({ type: String, default: '' })
  IUCN: string;

  @ApiProperty()
  @Prop({ type: String, default: '' })
  VRB: string;

  @ApiProperty()
  @Prop({ type: String, default: '' })
  Decree: string;

  @ApiProperty()
  @Prop({ type: String, default: '' })
  CITES: string;

  @ApiProperty()
  @Prop({ type: String, default: '' })
  distribution: string;

  @ApiProperty()
  @Prop({ type: String, default: '' })
  specimen: string;

  @ApiProperty()
  @Prop({ type: String, default: '' })
  habitat: string;

  @ApiProperty()
  @Prop({ type: String, default: '' })
  place: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  collBy: string;

  @ApiProperty()
  @Prop({ type: Number, required: true })
  collAt: number;

  @Type(() => User)
  @ApiProperty()
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    immutable: true,
    ref: 'User',
    autopopulate: true,
  })
  createBy: User;

  @ApiProperty()
  @Prop({ type: Number, default: Date.now, required: true, immutable: true })
  createAt: number;
}

export type AnimalDoc = Animal & Document;
export const AnimalSchema = SchemaFactory.createForClass(Animal);
AnimalSchema.methods.toJSON = function (): Animal {
  return plainToInstance(Animal, this.toObject());
};
AnimalSchema.index({ name: 'text', nameplate: 'text', scienceName: 'text' });
