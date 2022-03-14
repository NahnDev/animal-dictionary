import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { RequireRole } from 'src/decorators/require-role.decorator';
import { USER_ROLE } from 'src/enum/USER_ROLE';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@ApiTags('animal')
@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @UseGuards(JwtGuard)
  @RequireRole([USER_ROLE.ADMIN, USER_ROLE.EDITOR])
  @Post()
  async create(@Body() createAnimalDto: CreateAnimalDto) {
    return await this.animalService.create(createAnimalDto);
  }

  @Get()
  async findAll(
    @Query('page') pageQuery: string,
    @Query('familia') familia: string,
    @Query('ordo') ordo: string,
    @Query('animalCls') animalCls: string,
  ) {
    const page = Number(pageQuery) || 0;
    return await this.animalService.findAll(page, familia, ordo, animalCls);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.animalService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @RequireRole([USER_ROLE.ADMIN, USER_ROLE.EDITOR])
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ) {
    return await this.animalService.update(id, updateAnimalDto);
  }

  @UseGuards(JwtGuard)
  @RequireRole([USER_ROLE.ADMIN, USER_ROLE.EDITOR])
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.animalService.remove(id);
  }
}
