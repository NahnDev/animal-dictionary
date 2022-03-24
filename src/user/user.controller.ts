import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { RequireRole } from 'src/decorators/require-role.decorator';
import { USER_ROLE } from 'src/enum/USER_ROLE';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { User } from './schemas/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOkResponse({ type: User })
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @RequireRole([USER_ROLE.ADMIN])
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOkResponse({ type: [User] })
  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @ApiOkResponse({ type: User })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @ApiOkResponse({ type: User })
  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @RequireRole([USER_ROLE.ADMIN])
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @RequireRole([USER_ROLE.ADMIN])
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
