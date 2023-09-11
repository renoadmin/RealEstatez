import { GlAllocate as TGlAllocate } from "../api/glAllocate/GlAllocate";

export const GLALLOCATE_TITLE_FIELD = "scolumnname";

export const GlAllocateTitle = (record: TGlAllocate): string => {
  return record.scolumnname || String(record.id);
};
