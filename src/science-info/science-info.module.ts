import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalClsController } from './controllers/animalCls.controller';
import { FamiliaController } from './controllers/familia.controller';
import { OrdoController } from './controllers/ordo.controller';
import { PhylumController } from './controllers/phylum.controller';
import { RegnumController } from './controllers/regnum.controller';
import { AnimalCls, AnimalClsSchema } from './schemas/animalCls.schema';
import { Familia, FamiliaSchema } from './schemas/familia.schema';
import { Ordo, OrdoSchema } from './schemas/ordo.schema';
import { Phylum, PhylumSchema } from './schemas/phylum.schema';
import { Regnum, RegnumSchema } from './schemas/regnum.schema';
import { AnimalClsService } from './services/animalCls.service';
import { FamiliaService } from './services/familia.service';
import { OrdoService } from './services/ordo.service';
import { PhylumService } from './services/phylum.schema';
import { RegnumService } from './services/regnum.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { schema: AnimalClsSchema, name: AnimalCls.name },
      {
        schema: FamiliaSchema,
        name: Familia.name,
      },
      { schema: OrdoSchema, name: Ordo.name },
      { schema: PhylumSchema, name: Phylum.name },
      { schema: RegnumSchema, name: Regnum.name },
    ]),
  ],
  controllers: [
    AnimalClsController,
    FamiliaController,
    OrdoController,
    PhylumController,
    RegnumController,
  ],
  providers: [
    AnimalClsService,
    FamiliaService,
    OrdoService,
    PhylumService,
    RegnumService,
  ],
})
export class ScienceInfoModule {}
