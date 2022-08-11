import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get()
  findByName() {
    return 'USER';
  }

  @Post('create')
  async create(@Body() userDto: CreateUserDto) {
    console.log(userDto);
    const res = await this.userService.create(userDto);
    return res;
  }
}
