import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Regnum, RegnumDoc } from '../schemas/regnum.schema';
import { ScienceInfoService } from './science-info.service';
import { Model } from 'mongoose';

@Injectable()
export class RegnumService extends ScienceInfoService<Regnum, RegnumDoc> {
  constructor(@InjectModel(Regnum.name) private regnumModel: Model<RegnumDoc>) {
    super(regnumModel);
  }
}
