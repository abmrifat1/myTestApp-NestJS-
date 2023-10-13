import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    console.log('this is interceptor');
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    request.body.gender = 'Male';
    return next.handle();
  }
}
