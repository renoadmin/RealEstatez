import { Module } from "@nestjs/common";
import { GlAllocateModuleBase } from "./base/glAllocate.module.base";
import { GlAllocateService } from "./glAllocate.service";
import { GlAllocateController } from "./glAllocate.controller";
import { GlAllocateResolver } from "./glAllocate.resolver";

@Module({
  imports: [GlAllocateModuleBase],
  controllers: [GlAllocateController],
  providers: [GlAllocateService, GlAllocateResolver],
  exports: [GlAllocateService],
})
export class GlAllocateModule {}
