import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ordo, OrdoDoc } from '../schemas/ordo.schema';
import { ScienceInfoService } from './science-info.service';
import { Model } from 'mongoose';

@Injectable()
export class OrdoService extends ScienceInfoService<Ordo, OrdoDoc> {
  constructor(@InjectModel(Ordo.name) private OrdoModel: Model<OrdoDoc>) {
    super(OrdoModel);
  }
}
