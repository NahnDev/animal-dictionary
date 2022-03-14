import { Controller } from '@nestjs/common';
import { FamiliaService } from '../services/familia.service';
import { ScienceInfoController } from './science-info.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('familia')
@Controller('familia')
export class FamiliaController extends ScienceInfoController {
  constructor(private readonly familiaService: FamiliaService) {
    super(familiaService);
  }
}
