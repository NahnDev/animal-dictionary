import { Controller } from '@nestjs/common';
import { RegnumService } from '../services/regnum.service';
import { ScienceInfoController } from './science-info.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('regnum')
@Controller('regnum')
export class RegnumController extends ScienceInfoController {
  constructor(private readonly regnumService: RegnumService) {
    super(regnumService);
  }
}
