import { Controller, Get, Req, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import RabbitmqServer from './rabbitmq-server';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
