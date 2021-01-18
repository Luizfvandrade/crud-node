import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { version } from '../package.json'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): boolean {
    return true
  }

  @Get('/version')
  getVersion(): any {
    return {
      version,
    }
  }
}
