import { HttpException, HttpStatus } from '@nestjs/common';

export class UserException extends HttpException {
  constructor() {
    super('This is my custome Exception', HttpStatus.FORBIDDEN);
  }
}
