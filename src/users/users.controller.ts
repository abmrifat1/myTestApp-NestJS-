import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
  UseFilters,
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
  Req,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserCustomExceptionFilter } from './user.exception.filter';
import { UserGuard } from './user.guard';
import { UserInterceptor } from './user.interceptor';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseFilters(UserCustomExceptionFilter)
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    throw new UnauthorizedException();
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(UserGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.usersService.findOne(+id);
  }

  @Get('/name/:userName')
  getUserByUserName(@Param('userName') userName: string) {
    console.log(userName);
    return this.usersService.getUserByUserName(userName);
  }

  @Patch(':id')
  @UseInterceptors(UserInterceptor)
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateUserDto: UpdateUserDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const updatedUser = this.usersService.update(+id, updateUserDto);
    return {
      updatedUser: updatedUser,
      request: res.json(req.body),
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
