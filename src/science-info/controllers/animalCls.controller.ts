import { Controller } from '@nestjs/common';
import { AnimalClsService } from '../services/animalCls.service';
import { ScienceInfoController } from './science-info.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('animal-cls')
@Controller('animal-cls')
export class AnimalClsController extends ScienceInfoController {
  constructor(private readonly animalClsService: AnimalClsService) {
    super(animalClsService);
  }
}
