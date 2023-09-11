import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GlAllocateDetailServiceBase } from "./base/glAllocateDetail.service.base";

@Injectable()
export class GlAllocateDetailService extends GlAllocateDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
