import { Status } from "src/@core/domain/entities/project.entity";

export type TInputProjectDTO = {
    name: string;
    Status: Status
}

export type TOutPutProjectDTO = {
    id: number;
    name: string;
    status: Status
}