import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GlapTemplateServiceBase } from "./base/glapTemplate.service.base";

@Injectable()
export class GlapTemplateService extends GlapTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
