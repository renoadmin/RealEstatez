import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const GlAllocateHistoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Hacct" source="hacct" />
        <TextField label="Hbatch" source="hbatch" />
        <TextField label="Hje" source="hje" />
        <TextField label="Hppty" source="hppty" />
        <TextField label="Ibook" source="ibook" />
        <TextField label="Id" source="id" />
        <TextField label="Sbegin" source="sbegin" />
        <TextField label="Sbeginbudget" source="sbeginbudget" />
        <TextField label="Sbudget" source="sbudget" />
        <TextField label="Smtd" source="smtd" />
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
        <TextField label="Umonth" source="umonth" />
      </SimpleShowLayout>
    </Show>
  );
};
