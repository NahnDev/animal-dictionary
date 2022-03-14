import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { Science } from './science.schema';

@Schema()
export class Ordo extends Science {}

export type OrdoDoc = Ordo & Document;
export const OrdoSchema = SchemaFactory.createForClass(Ordo);
OrdoSchema.methods.toJSON = function () {
  return plainToClass(Ordo, this.toObject());
};
