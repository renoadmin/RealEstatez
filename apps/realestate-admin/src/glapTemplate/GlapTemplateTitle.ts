import { GlapTemplate as TGlapTemplate } from "../api/glapTemplate/GlapTemplate";

export const GLAPTEMPLATE_TITLE_FIELD = "scode";

export const GlapTemplateTitle = (record: TGlapTemplate): string => {
  return record.scode || String(record.id);
};
