import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Animal, AnimalSchema } from './schema/animal.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Animal.name,
        useFactory: () => {
          const schema = AnimalSchema;
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
    ]),
  ],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
