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
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { PublicApi } from 'src/decorators/public-api.decorator';
import { RequireRole } from 'src/decorators/require-role.decorator';
import { USER_ROLE } from 'src/enum/USER_ROLE';
import { User } from 'src/user/schemas/user.schema';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './schema/animal.schema';

@ApiTags('animal')
@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @ApiOkResponse({ type: Animal })
  @ApiBearerAuth()
  @RequireRole([USER_ROLE.ADMIN, USER_ROLE.EDITOR])
  @Post()
  async create(
    @Body() createAnimalDto: CreateAnimalDto,
    @Req() req: Request & { user: User },
  ) {
    return await this.animalService.create(createAnimalDto, req.user);
  }

  @ApiOkResponse({ type: [Animal] })
  @PublicApi()
  @ApiQuery({ type: 'string', name: 'search', required: false })
  @ApiQuery({ type: 'string', name: 'familia', required: false })
  @ApiQuery({ type: 'string', name: 'ordo', required: false })
  @ApiQuery({ type: 'string', name: 'animalCls', required: false })
  @Get()
  async findAll(
    @Query('page') pageQuery: string,
    @Query('search') searchQuery: string,
    @Query('familia') familia?: string,
    @Query('ordo') ordo?: string,
    @Query('animalCls') animalCls?: string,
  ) {
    const page = Number(pageQuery) || 0;
    const search = searchQuery || '';

    return await this.animalService.findAll(
      page,
      search,
      familia,
      ordo,
      animalCls,
    );
  }

  @ApiOkResponse({ type: Animal })
  @PublicApi()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.animalService.findOne(id);
  }

  @ApiOkResponse({ type: Animal })
  @ApiBearerAuth()
  @RequireRole([USER_ROLE.ADMIN, USER_ROLE.EDITOR])
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ) {
    return await this.animalService.update(id, updateAnimalDto);
  }

  @ApiOkResponse({ type: Animal })
  @ApiBearerAuth()
  @RequireRole([USER_ROLE.ADMIN, USER_ROLE.EDITOR])
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.animalService.remove(id);
  }
}
