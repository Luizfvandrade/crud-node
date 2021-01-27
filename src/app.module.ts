import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';

import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { RedisService } from './redis/redis.service';

const env = process.env.NODE_ENV

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: `./config/.env.${env}`,
    isGlobal: true,
  }),],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, RedisService],
})
export class AppModule {}
