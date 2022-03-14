import { PartialType } from '@nestjs/swagger';
import { CreateScienceDto } from './create-science.dto';

export class UpdateScienceDto extends PartialType(CreateScienceDto) {}
