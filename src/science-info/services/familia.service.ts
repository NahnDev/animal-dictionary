import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Familia, FamiliaDoc } from '../schemas/familia.schema';
import { ScienceInfoService } from './science-info.service';
import { Model } from 'mongoose';

@Injectable()
export class FamiliaService extends ScienceInfoService<Familia, FamiliaDoc> {
  constructor(
    @InjectModel(Familia.name) private FamiliaModel: Model<FamiliaDoc>,
  ) {
    super(FamiliaModel);
  }
}
