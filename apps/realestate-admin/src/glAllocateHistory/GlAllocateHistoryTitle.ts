import { GlAllocateHistory as TGlAllocateHistory } from "../api/glAllocateHistory/GlAllocateHistory";

export const GLALLOCATEHISTORY_TITLE_FIELD = "ssegment1";

export const GlAllocateHistoryTitle = (record: TGlAllocateHistory): string => {
  return record.ssegment1?.toString() || String(record.id);
};
