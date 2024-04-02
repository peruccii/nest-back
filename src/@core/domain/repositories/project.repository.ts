import { Project } from "../entities/project.entity";

export interface IProjectRepository {
    findAll(): Promise<Project[]>;
    create(project: Project): Promise<Project>;
  }