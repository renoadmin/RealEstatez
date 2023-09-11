import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GlAllocateHistoryServiceBase } from "./base/glAllocateHistory.service.base";

@Injectable()
export class GlAllocateHistoryService extends GlAllocateHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
