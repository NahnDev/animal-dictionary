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

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(JwtGuard)
  @RequireRole([USER_ROLE.ADMIN])
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  @RequireRole([USER_ROLE.ADMIN])
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @RequireRole([USER_ROLE.ADMIN])
  @UseGuards(JwtGuard)
  async remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
