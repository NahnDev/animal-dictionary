import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AnimalCls, AnimalClsDoc } from '../schemas/animalCls.schema';
import { ScienceInfoService } from './science-info.service';
import { Model } from 'mongoose';

@Injectable()
export class AnimalClsService extends ScienceInfoService<
  AnimalCls,
  AnimalClsDoc
> {
  constructor(
    @InjectModel(AnimalCls.name) private animalClsModel: Model<AnimalClsDoc>,
  ) {
    super(animalClsModel);
  }
}
