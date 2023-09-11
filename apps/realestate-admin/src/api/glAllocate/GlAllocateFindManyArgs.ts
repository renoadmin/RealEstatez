import { GlAllocateWhereInput } from "./GlAllocateWhereInput";
import { GlAllocateOrderByInput } from "./GlAllocateOrderByInput";

export type GlAllocateFindManyArgs = {
  where?: GlAllocateWhereInput;
  orderBy?: Array<GlAllocateOrderByInput>;
  skip?: number;
  take?: number;
};
