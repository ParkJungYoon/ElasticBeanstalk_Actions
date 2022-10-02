import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Elastic Beanstalk App';
  }
  getHi(): string {
    return 'Welcome to the demo for ElasticBeanstalk';
  }
}
