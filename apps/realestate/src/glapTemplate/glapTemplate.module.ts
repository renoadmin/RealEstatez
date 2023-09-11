import { Module } from "@nestjs/common";
import { GlapTemplateModuleBase } from "./base/glapTemplate.module.base";
import { GlapTemplateService } from "./glapTemplate.service";
import { GlapTemplateController } from "./glapTemplate.controller";
import { GlapTemplateResolver } from "./glapTemplate.resolver";

@Module({
  imports: [GlapTemplateModuleBase],
  controllers: [GlapTemplateController],
  providers: [GlapTemplateService, GlapTemplateResolver],
  exports: [GlapTemplateService],
})
export class GlapTemplateModule {}
