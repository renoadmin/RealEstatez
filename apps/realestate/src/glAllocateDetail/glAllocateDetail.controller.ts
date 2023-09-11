import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GlAllocateDetailService } from "./glAllocateDetail.service";
import { GlAllocateDetailControllerBase } from "./base/glAllocateDetail.controller.base";

@swagger.ApiTags("glAllocateDetails")
@common.Controller("glAllocateDetails")
export class GlAllocateDetailController extends GlAllocateDetailControllerBase {
  constructor(protected readonly service: GlAllocateDetailService) {
    super(service);
  }
}
