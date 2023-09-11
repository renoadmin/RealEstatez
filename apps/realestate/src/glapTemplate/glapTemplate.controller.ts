import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GlapTemplateService } from "./glapTemplate.service";
import { GlapTemplateControllerBase } from "./base/glapTemplate.controller.base";

@swagger.ApiTags("glapTemplates")
@common.Controller("glapTemplates")
export class GlapTemplateController extends GlapTemplateControllerBase {
  constructor(protected readonly service: GlapTemplateService) {
    super(service);
  }
}
