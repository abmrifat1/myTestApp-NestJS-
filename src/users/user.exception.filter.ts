import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class UserCustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const Request = context.getRequest<Request>();
    const statue = exception.getStatus();

    response.status(statue).json({
      statueCode: statue,
      url: Request.url,
      timeStamp: new Date().toISOString(),
    });
  }
}
