import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RootController } from './root.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [RootController],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
