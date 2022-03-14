import { Controller } from '@nestjs/common';
import { PhylumService } from '../services/phylum.schema';
import { ScienceInfoController } from './science-info.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('phylum')
@Controller('phylum')
export class PhylumController extends ScienceInfoController {
  constructor(private readonly phylumService: PhylumService) {
    super(phylumService);
  }
}
