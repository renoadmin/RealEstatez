import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GlAllocateDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Dfactor" source="dfactor" />
        <NumberInput step={1} label="Hacct" source="hacct" />
        <NumberInput
          step={1}
          label="Haccttreedetail"
          source="haccttreedetail"
        />
        <NumberInput step={1} label="Hfromacct" source="hfromacct" />
        <NumberInput step={1} label="Hglallocate" source="hglallocate" />
        <NumberInput step={1} label="Hoffsetacct" source="hoffsetacct" />
        <NumberInput step={1} label="Ibudget" source="ibudget" />
        <NumberInput step={1} label="Iexclude" source="iexclude" />
        <NumberInput step={1} label="Igroup" source="igroup" />
        <NumberInput step={1} label="Inegate" source="inegate" />
        <NumberInput step={1} label="Iorder" source="iorder" />
        <NumberInput step={1} label="Iptd" source="iptd" />
        <TextInput label="Sacctdescription" source="sacctdescription" />
        <TextInput label="Sacctnode" source="sacctnode" />
        <TextInput label="Sbook" source="sbook" />
        <TextInput label="Scalctype" source="scalctype" />
        <TextInput label="Sformula" source="sformula" />
        <TextInput label="Snotes" source="snotes" />
        <TextInput label="Spropertylist" source="spropertylist" />
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
        <TextInput label="Stocolumnname" source="stocolumnname" />
        <TextInput label="Stype" source="stype" />
      </SimpleForm>
    </Edit>
  );
};
