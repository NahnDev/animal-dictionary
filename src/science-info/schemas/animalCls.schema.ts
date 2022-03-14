import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { Science } from './science.schema';

@Schema()
export class AnimalCls extends Science {}

export type AnimalClsDoc = AnimalCls & Document;
export const AnimalClsSchema = SchemaFactory.createForClass(AnimalCls);
AnimalClsSchema.methods.toJSON = function (): AnimalCls {
  return plainToClass(AnimalCls, this.toObject());
};
