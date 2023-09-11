import { Module } from "@nestjs/common";
import { GlapTemplateDetailModuleBase } from "./base/glapTemplateDetail.module.base";
import { GlapTemplateDetailService } from "./glapTemplateDetail.service";
import { GlapTemplateDetailController } from "./glapTemplateDetail.controller";
import { GlapTemplateDetailResolver } from "./glapTemplateDetail.resolver";

@Module({
  imports: [GlapTemplateDetailModuleBase],
  controllers: [GlapTemplateDetailController],
  providers: [GlapTemplateDetailService, GlapTemplateDetailResolver],
  exports: [GlapTemplateDetailService],
})
export class GlapTemplateDetailModule {}
