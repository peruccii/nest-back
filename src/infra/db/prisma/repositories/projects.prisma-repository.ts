import { Project } from "src/@core/domain/entities/project.entity";
import { IProjectRepository } from "src/@core/domain/repositories/project.repository";
import { prisma } from "..";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProjectPrismaRepository implements IProjectRepository {
    async create(project: Project): Promise<Project> {
        const result = await prisma.project.create({
            data: {
                name: project.getName(),
                status: { connect: { id: 2 } }
            },
            include: { status: { select: { status: true } } },
        })
        project.setId(result.id)
       
        return project
    }

    async findAll(): Promise<Project[]> {
        const result = await prisma.project.findMany()
        return []
    }
    // private mapOutput(input: 
    //     CreateProjectDto
    //     ): Project {
    //       const professional = Project.create({
    //         name: input.name,
    //         status: input.status
    //       });
    //     return professional
    //   }
}