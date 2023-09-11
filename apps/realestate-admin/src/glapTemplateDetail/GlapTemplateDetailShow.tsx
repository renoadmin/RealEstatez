import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const GlapTemplateDetailShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Camount" source="camount" />
        <TextField label="Dpercent" source="dpercent" />
        <TextField label="Dretention" source="dretention" />
        <TextField label="Hacct" source="hacct" />
        <TextField label="Hcategory" source="hcategory" />
        <TextField label="Hcontract" source="hcontract" />
        <TextField label="Hcostcode" source="hcostcode" />
        <TextField label="Hglaptemplate" source="hglaptemplate" />
        <TextField label="Hjob" source="hjob" />
        <TextField label="Hproperty" source="hproperty" />
        <TextField label="Hvattrantype" source="hvattrantype" />
        <TextField label="Id" source="id" />
        <TextField label="Snotes" source="snotes" />
        <TextField label="Ssegment1" source="ssegment1" />
        <TextField label="Ssegment10" source="ssegment10" />
        <TextField label="Ssegment11" source="ssegment11" />
        <TextField label="Ssegment12" source="ssegment12" />
        <TextField label="Ssegment2" source="ssegment2" />
        <TextField label="Ssegment3" source="ssegment3" />
        <TextField label="Ssegment4" source="ssegment4" />
        <TextField label="Ssegment5" source="ssegment5" />
        <TextField label="Ssegment6" source="ssegment6" />
        <TextField label="Ssegment7" source="ssegment7" />
        <TextField label="Ssegment8" source="ssegment8" />
        <TextField label="Ssegment9" source="ssegment9" />
      </SimpleShowLayout>
    </Show>
  );
};
