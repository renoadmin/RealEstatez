import * as graphql from "@nestjs/graphql";
import { GlapTemplateDetailResolverBase } from "./base/glapTemplateDetail.resolver.base";
import { GlapTemplateDetail } from "./base/GlapTemplateDetail";
import { GlapTemplateDetailService } from "./glapTemplateDetail.service";

@graphql.Resolver(() => GlapTemplateDetail)
export class GlapTemplateDetailResolver extends GlapTemplateDetailResolverBase {
  constructor(protected readonly service: GlapTemplateDetailService) {
    super(service);
  }
}
