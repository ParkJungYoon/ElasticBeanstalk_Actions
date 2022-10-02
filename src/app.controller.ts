import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // url 가져와서 함수로 매핑
  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
}
