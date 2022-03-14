import { Controller } from '@nestjs/common';
import { OrdoService } from '../services/ordo.service';
import { ScienceInfoController } from './science-info.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ordo')
@Controller('ordo')
export class OrdoController extends ScienceInfoController {
  constructor(private readonly ordoService: OrdoService) {
    super(ordoService);
  }
}
