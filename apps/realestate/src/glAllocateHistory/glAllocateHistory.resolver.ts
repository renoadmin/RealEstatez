import * as graphql from "@nestjs/graphql";
import { GlAllocateHistoryResolverBase } from "./base/glAllocateHistory.resolver.base";
import { GlAllocateHistory } from "./base/GlAllocateHistory";
import { GlAllocateHistoryService } from "./glAllocateHistory.service";

@graphql.Resolver(() => GlAllocateHistory)
export class GlAllocateHistoryResolver extends GlAllocateHistoryResolverBase {
  constructor(protected readonly service: GlAllocateHistoryService) {
    super(service);
  }
}
