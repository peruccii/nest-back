  import { Injectable } from "@nestjs/common";
  import { IProjectRepository } from "src/@core/domain/repositories/project.repository";
  import { mapOutput } from "./map";
  import { Project } from "src/@core/domain/entities/project.entity";
  import { TInputProjectDTO, TOutPutProjectDTO } from "src/projects/dto/project.dto";


  export class CreateProjectUseCase {
    constructor(
     
      private readonly projectRepository: IProjectRepository
    ) {}

    async execute(data: TInputProjectDTO  ): Promise<TOutPutProjectDTO> {
      const project = Project.create({
        ...data,
      })
      
      if (project) {
        const result =  await this.projectRepository.create(project)
        return mapOutput(result)
      }
    }
  }