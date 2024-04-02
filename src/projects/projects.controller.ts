import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {  TInputProjectDTO } from './dto/project.dto';
import { CreateProjectUseCase } from 'src/@core/application/use-cases/projects/create-project.use-case';
import { FindAllProjectsUseCase } from 'src/@core/application/use-cases/projects/findAll-project.use-case';
import { Project } from 'src/@core/domain/entities/project.entity';

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly createProjectUseCase: CreateProjectUseCase,
    private readonly findAllProjectUseCase: FindAllProjectsUseCase
    ) {}

  @Post()
  create(@Body() dto: TInputProjectDTO) {
    return this.createProjectUseCase.execute(dto);
  }

  @Get()
  findAll() {
    return this.findAllProjectUseCase.findAll();
  }
}
