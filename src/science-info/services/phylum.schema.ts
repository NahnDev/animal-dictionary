import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Phylum, PhylumDoc } from '../schemas/phylum.schema';
import { ScienceInfoService } from './science-info.service';
import { Model } from 'mongoose';

@Injectable()
export class PhylumService extends ScienceInfoService<Phylum, PhylumDoc> {
  constructor(@InjectModel(Phylum.name) private phylumModel: Model<PhylumDoc>) {
    super(phylumModel);
  }
}
