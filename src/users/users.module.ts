import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaClientModule } from 'src/prisma-client/prisma-client.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [PrismaClientModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule { }
