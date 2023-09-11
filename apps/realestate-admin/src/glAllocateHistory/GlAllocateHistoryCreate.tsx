import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const GlAllocateHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Hacct" source="hacct" />
        <NumberInput step={1} label="Hbatch" source="hbatch" />
        <NumberInput step={1} label="Hje" source="hje" />
        <NumberInput step={1} label="Hppty" source="hppty" />
        <NumberInput step={1} label="Ibook" source="ibook" />
        <NumberInput label="Sbegin" source="sbegin" />
        <NumberInput label="Sbeginbudget" source="sbeginbudget" />
        <NumberInput label="Sbudget" source="sbudget" />
        <NumberInput label="Smtd" source="smtd" />
        <TextInput label="Ssegment1" source="ssegment1" />
        <TextInput label="Ssegment10" source="ssegment10" />
        <TextInput label="Ssegment11" source="ssegment11" />
        <TextInput label="Ssegment12" source="ssegment12" />
        <TextInput label="Ssegment2" source="ssegment2" />
        <TextInput label="Ssegment3" source="ssegment3" />
        <TextInput label="Ssegment4" source="ssegment4" />
        <TextInput label="Ssegment5" source="ssegment5" />
        <TextInput label="Ssegment6" source="ssegment6" />
        <TextInput label="Ssegment7" source="ssegment7" />
        <TextInput label="Ssegment8" source="ssegment8" />
        <TextInput label="Ssegment9" source="ssegment9" />
        <DateTimeInput label="Umonth" source="umonth" />
      </SimpleForm>
    </Create>
  );
};
