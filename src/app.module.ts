import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller';
import { CrudController } from './crud/crud.controller';

import { AppService } from './app.service';
import { CrudService } from './crud/crud.service';
import { ValidatorService } from './validator/validator.service';
import { RedisService } from './redis/redis.service';

const env = process.env.NODE_ENV

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: `./config/.env.${env}`,
    isGlobal: true,
  }),],
  controllers: [AppController, CrudController],
  providers: [AppService, CrudService, ValidatorService, RedisService],
})
export class AppModule {}
