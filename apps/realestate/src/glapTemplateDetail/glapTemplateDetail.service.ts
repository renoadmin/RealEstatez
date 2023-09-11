import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GlapTemplateDetailServiceBase } from "./base/glapTemplateDetail.service.base";

@Injectable()
export class GlapTemplateDetailService extends GlapTemplateDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
