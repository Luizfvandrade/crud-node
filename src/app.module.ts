import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudController } from './crud/crud.controller';
import { CrudService } from './crud/crud.service';
import { ValidatorService } from './validator/validator.service';
import { RedisService } from './redis/redis.service';

@Module({
  imports: [],
  controllers: [AppController, CrudController],
  providers: [AppService, CrudService, ValidatorService, RedisService],
})
export class AppModule {}
