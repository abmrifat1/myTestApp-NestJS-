import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './passport.local.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [PassportLocalStrategy],
  exports: [],
})
export class AuthModule {}
