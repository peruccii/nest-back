import { Project } from "src/@core/domain/entities/project.entity";
import { TOutPutProjectDTO } from "src/projects/dto/project.dto";


export function mapOutput(input: Project): TOutPutProjectDTO {
    return {
        id: input.getId(),
        name: input.getName(),
        status: input.getStatus()
    }
}