import { GlapTemplateDetail as TGlapTemplateDetail } from "../api/glapTemplateDetail/GlapTemplateDetail";

export const GLAPTEMPLATEDETAIL_TITLE_FIELD = "snotes";

export const GlapTemplateDetailTitle = (
  record: TGlapTemplateDetail
): string => {
  return record.snotes || String(record.id);
};
