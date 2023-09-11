import { Module } from "@nestjs/common";
import { GlAllocateHistoryModuleBase } from "./base/glAllocateHistory.module.base";
import { GlAllocateHistoryService } from "./glAllocateHistory.service";
import { GlAllocateHistoryController } from "./glAllocateHistory.controller";
import { GlAllocateHistoryResolver } from "./glAllocateHistory.resolver";

@Module({
  imports: [GlAllocateHistoryModuleBase],
  controllers: [GlAllocateHistoryController],
  providers: [GlAllocateHistoryService, GlAllocateHistoryResolver],
  exports: [GlAllocateHistoryService],
})
export class GlAllocateHistoryModule {}
