import { GlAllocateDetail as TGlAllocateDetail } from "../api/glAllocateDetail/GlAllocateDetail";

export const GLALLOCATEDETAIL_TITLE_FIELD = "stocolumnname";

export const GlAllocateDetailTitle = (record: TGlAllocateDetail): string => {
  return record.stocolumnname || String(record.id);
};
