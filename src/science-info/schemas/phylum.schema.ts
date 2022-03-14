import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { Science } from './science.schema';

@Schema()
export class Phylum extends Science {}
export type PhylumDoc = Phylum & Document;
export const PhylumSchema = SchemaFactory.createForClass(Phylum);
PhylumSchema.methods.toJSON = function () {
  return plainToClass(Phylum, this.toObject());
};
