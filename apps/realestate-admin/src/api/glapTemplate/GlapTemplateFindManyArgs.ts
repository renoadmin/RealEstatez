import { GlapTemplateWhereInput } from "./GlapTemplateWhereInput";
import { GlapTemplateOrderByInput } from "./GlapTemplateOrderByInput";

export type GlapTemplateFindManyArgs = {
  where?: GlapTemplateWhereInput;
  orderBy?: Array<GlapTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
