import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './dto/create-user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created')
  hangleUserCreated(data: CreateUserEvent) {
    this.appService.hangleUserCreated(data);
  }
}
