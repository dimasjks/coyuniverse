import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getIndex(): string {
    return 'INDEX';
  }

  @Get('login')
  login(): string {
    return 'LOGIN';
  }

  @Get('register')
  register(): string {
    return 'REGISTER';
  }

  @Post('logout')
  logout(): string {
    return 'logout';
  }
}
