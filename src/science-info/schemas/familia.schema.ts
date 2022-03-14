import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { Science } from './science.schema';

@Schema()
export class Familia extends Science {}

export type FamiliaDoc = Familia & Document;
export const FamiliaSchema = SchemaFactory.createForClass(Familia);
FamiliaSchema.methods.toJSON = function () {
  return plainToClass(Familia, this.toObject());
};
