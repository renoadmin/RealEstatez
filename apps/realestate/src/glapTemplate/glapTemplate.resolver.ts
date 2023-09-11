import * as graphql from "@nestjs/graphql";
import { GlapTemplateResolverBase } from "./base/glapTemplate.resolver.base";
import { GlapTemplate } from "./base/GlapTemplate";
import { GlapTemplateService } from "./glapTemplate.service";

@graphql.Resolver(() => GlapTemplate)
export class GlapTemplateResolver extends GlapTemplateResolverBase {
  constructor(protected readonly service: GlapTemplateService) {
    super(service);
  }
}
