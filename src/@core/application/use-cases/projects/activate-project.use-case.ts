import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ActivateProjectUseCase {
    constructor(private readonly prisma: PrismaService) {}

    execute(id) {
        return this.prisma.project.update({
            where: { id },
            data: { status: { connect: { id: 1 } } }
        })
    }
}