import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const protocal = req.protocol;
    const host = req.get('host');
    const url = req.originalUrl;
    const methood = req.method;
    const date = new Date().toLocaleDateString();
    console.log('class base middleware on users');
    console.log(
      `url is: ${protocal}://${host}${url}. method is: ${methood} and date is ${date}`,
    );

    next();
  }
}
