
import { IProjectRepository } from "src/@core/domain/repositories/project.repository";
import { mapOutput } from "./map";
import { TOutPutProjectDTO } from "src/projects/dto/project.dto";


export class FindAllProjectsUseCase {
    constructor(private readonly projectRepository: IProjectRepository) {}

  async  findAll( ): Promise<TOutPutProjectDTO[]>{ 
    console.log(this.projectRepository)
        const projects = await this.projectRepository.findAll();
        return projects.map(mapOutput)
    }
}