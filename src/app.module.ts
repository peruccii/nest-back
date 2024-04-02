import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [ProjectsModule, PrismaModule, StatusModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
