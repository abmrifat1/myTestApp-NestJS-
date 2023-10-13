import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('root')
export class RootController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard('local'))
  getHello(): string {
    return 'this is private data';
  }
}
