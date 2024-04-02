import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { CreateProjectUseCase } from 'src/@core/application/use-cases/projects/create-project.use-case';
import { FindAllProjectsUseCase } from 'src/@core/application/use-cases/projects/findAll-project.use-case';
import { ProjectPrismaRepository } from 'src/infra/db/prisma/repositories/projects.prisma-repository';

@Module({
  controllers: [ProjectsController],
  providers: [

    {
      provide: FindAllProjectsUseCase,
      useClass: FindAllProjectsUseCase
    },
    {
      provide: ProjectPrismaRepository,
      useClass: ProjectPrismaRepository
    },
    {
      provide: CreateProjectUseCase,
      useFactory: (
        professionalRepository: ProjectPrismaRepository,
      ) => {
        return new CreateProjectUseCase(
          professionalRepository,
        );
      },
      inject: [ProjectPrismaRepository]
    },
  ],
})
export class ProjectsModule {}
