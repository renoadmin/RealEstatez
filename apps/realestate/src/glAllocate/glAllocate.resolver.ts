import * as graphql from "@nestjs/graphql";
import { GlAllocateResolverBase } from "./base/glAllocate.resolver.base";
import { GlAllocate } from "./base/GlAllocate";
import { GlAllocateService } from "./glAllocate.service";

@graphql.Resolver(() => GlAllocate)
export class GlAllocateResolver extends GlAllocateResolverBase {
  constructor(protected readonly service: GlAllocateService) {
    super(service);
  }
}
