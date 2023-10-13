import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('root')
export class RootController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard('local'))
  getHello(@Request() req): string {
    return req.user;
  }
}
