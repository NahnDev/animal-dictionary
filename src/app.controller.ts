import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PublicApi } from './decorators/public-api.decorator';

@PublicApi()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
