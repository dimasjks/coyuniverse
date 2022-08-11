import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PrismaClientService } from './prisma-client/prisma-client.service';
import { PrismaClientModule } from './prisma-client/prisma-client.module';

@Module({
  imports: [UsersModule, PostsModule, DashboardModule, PrismaClientModule],
  controllers: [AppController],
  providers: [AppService, PrismaClientService],
})
export class AppModule {}
