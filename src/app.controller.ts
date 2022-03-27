import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { PublicApi } from './decorators/public-api.decorator';

@PublicApi()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/index.html')
  getHello() {
    return;
  }
}
