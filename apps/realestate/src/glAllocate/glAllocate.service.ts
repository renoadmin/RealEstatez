import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GlAllocateServiceBase } from "./base/glAllocate.service.base";

@Injectable()
export class GlAllocateService extends GlAllocateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
