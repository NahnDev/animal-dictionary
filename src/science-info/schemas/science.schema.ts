import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ExposeId } from 'src/helper/expose-id.decorator';
import { Document } from 'mongoose';
import { plainToInstance } from 'class-transformer';

@Schema()
export class Science {
  @ExposeId()
  @IsString()
  @ApiProperty()
  _id: string;

  @ApiProperty()
  @IsString()
  @Prop({ type: String, required: true, unique: true })
  name: string;
}

export type ScienceDocument = Science & Document;
export const ScienceSchema = SchemaFactory.createForClass(Science);
ScienceSchema.methods.toJSON = function (): Science {
  return plainToInstance(Science, this.toObject());
};
