import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { User1Service } from "./user1.service";
import { User1ControllerBase } from "./base/user1.controller.base";

@swagger.ApiTags("user1s")
@common.Controller("user1s")
export class User1Controller extends User1ControllerBase {
  constructor(protected readonly service: User1Service) {
    super(service);
  }
}
