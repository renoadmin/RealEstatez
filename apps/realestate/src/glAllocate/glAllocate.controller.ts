import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GlAllocateService } from "./glAllocate.service";
import { GlAllocateControllerBase } from "./base/glAllocate.controller.base";

@swagger.ApiTags("glAllocates")
@common.Controller("glAllocates")
export class GlAllocateController extends GlAllocateControllerBase {
  constructor(protected readonly service: GlAllocateService) {
    super(service);
  }
}
