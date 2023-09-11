import { Module } from "@nestjs/common";
import { GlAllocateDetailModuleBase } from "./base/glAllocateDetail.module.base";
import { GlAllocateDetailService } from "./glAllocateDetail.service";
import { GlAllocateDetailController } from "./glAllocateDetail.controller";
import { GlAllocateDetailResolver } from "./glAllocateDetail.resolver";

@Module({
  imports: [GlAllocateDetailModuleBase],
  controllers: [GlAllocateDetailController],
  providers: [GlAllocateDetailService, GlAllocateDetailResolver],
  exports: [GlAllocateDetailService],
})
export class GlAllocateDetailModule {}
