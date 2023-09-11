import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GlAllocateHistoryService } from "./glAllocateHistory.service";
import { GlAllocateHistoryControllerBase } from "./base/glAllocateHistory.controller.base";

@swagger.ApiTags("glAllocateHistories")
@common.Controller("glAllocateHistories")
export class GlAllocateHistoryController extends GlAllocateHistoryControllerBase {
  constructor(protected readonly service: GlAllocateHistoryService) {
    super(service);
  }
}
