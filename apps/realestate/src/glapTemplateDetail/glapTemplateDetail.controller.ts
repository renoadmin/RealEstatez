import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GlapTemplateDetailService } from "./glapTemplateDetail.service";
import { GlapTemplateDetailControllerBase } from "./base/glapTemplateDetail.controller.base";

@swagger.ApiTags("glapTemplateDetails")
@common.Controller("glapTemplateDetails")
export class GlapTemplateDetailController extends GlapTemplateDetailControllerBase {
  constructor(protected readonly service: GlapTemplateDetailService) {
    super(service);
  }
}
