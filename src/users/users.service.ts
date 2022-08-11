import { Injectable } from '@nestjs/common';
import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaClientService) { }

  async create(userData: CreateUserDto) {
    const { password, ...data } = userData;
    console.log(data);
    await this.prisma.user.create({
      data: {
        ...data,
      },
    });
    return 'USER CREATED';
  }
}
