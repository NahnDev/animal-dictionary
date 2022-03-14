import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateAnimalDto } from './create-animal.dto';

export class UpdateAnimalDto extends OmitType(PartialType(CreateAnimalDto), [
  'name',
]) {}
