import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateScienceDto } from '../dto/create-science.dto';
import { UpdateScienceDto } from '../dto/update-science.dto';
import { Science, ScienceDocument } from '../schemas/science.schema';
import { ScienceInfoService } from '../services/science-info.service';
import { Types } from 'mongoose';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { RequireRole } from 'src/decorators/require-role.decorator';
import { USER_ROLE } from 'src/enum/USER_ROLE';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';

export abstract class ScienceInfoController {
  constructor(
    protected readonly scienceInfoService: ScienceInfoService<
      Science,
      Document
    >,
  ) {}

  @ApiOkResponse({ type: Science })
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @RequireRole([USER_ROLE.ADMIN, USER_ROLE.EDITOR])
  @Post()
  async create(@Body() createDto: CreateScienceDto) {
    return this.scienceInfoService.create(createDto);
  }

  @ApiOkResponse({ type: [Science] })
  @Get()
  async getAll(@Query('page') pageQuery?: string) {
    const page = Number(pageQuery) || 0;
    return this.scienceInfoService.findAll(page);
  }

  @ApiOkResponse({ type: Science })
  @Get(':idOrName')
  async getOne(@Param('idOrName') idOrName: string) {
    if (Types.ObjectId.isValid(idOrName)) {
      return this.scienceInfoService.findOne(idOrName);
    } else {
      return this.scienceInfoService.findWithName(idOrName);
    }
  }

  @ApiOkResponse({ type: Science })
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @RequireRole([USER_ROLE.ADMIN, USER_ROLE.EDITOR])
  @Patch(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() updateDto: UpdateScienceDto,
  ) {
    return this.scienceInfoService.updateOne(id, updateDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @RequireRole([USER_ROLE.ADMIN, USER_ROLE.EDITOR])
  @Delete(':id')
  async removeOne(@Param('id') id: string) {
    return this.scienceInfoService.removeOne(id);
  }
}
