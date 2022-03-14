import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { Science } from './science.schema';

@Schema()
export class Regnum extends Science {}

export type RegnumDoc = Regnum & Document;
export const RegnumSchema = SchemaFactory.createForClass(Regnum);
RegnumSchema.methods.toJSON = function () {
  return plainToClass(Regnum, this.toObject());
};
