import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  validate(userName: string, password: string): User {
    console.log('call.....');
    const user: User = this.usersService.getUserByUserName(userName);
    if (user === undefined) throw new UnauthorizedException();
    if (user !== undefined && user.password === password) return user;
    else throw new UnauthorizedException();
  }
}
