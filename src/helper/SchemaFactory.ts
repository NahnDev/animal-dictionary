import { SchemaFactory as NestSchemaFactory } from '@nestjs/mongoose';
import { Type } from '@nestjs/common';
import { Document, Schema } from 'mongoose';
import { plainToInstance } from 'class-transformer';

NestSchemaFactory.createForClass;

export class SchemaFactory extends NestSchemaFactory {
  static createForClass<
    TClass,
    TDocument extends Document<any, any, any> = Document<TClass, any, any>,
  >(target: Type<TClass>): Schema<TDocument> {
    const schema = NestSchemaFactory.createForClass<TClass, TDocument>(target);
    schema.methods.toJSON = function (): TClass {
      return plainToInstance<TClass, any>(target, this.toObject());
    };
    return schema;
  }
}
