import * as graphql from "@nestjs/graphql";
import { GlAllocateDetailResolverBase } from "./base/glAllocateDetail.resolver.base";
import { GlAllocateDetail } from "./base/GlAllocateDetail";
import { GlAllocateDetailService } from "./glAllocateDetail.service";

@graphql.Resolver(() => GlAllocateDetail)
export class GlAllocateDetailResolver extends GlAllocateDetailResolverBase {
  constructor(protected readonly service: GlAllocateDetailService) {
    super(service);
  }
}
