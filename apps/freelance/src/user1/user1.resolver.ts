import * as graphql from "@nestjs/graphql";
import { User1ResolverBase } from "./base/user1.resolver.base";
import { User1 } from "./base/User1";
import { User1Service } from "./user1.service";

@graphql.Resolver(() => User1)
export class User1Resolver extends User1ResolverBase {
  constructor(protected readonly service: User1Service) {
    super(service);
  }
}
