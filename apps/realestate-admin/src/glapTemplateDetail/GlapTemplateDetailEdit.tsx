import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GlapTemplateDetailEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Camount" source="camount" />
        <NumberInput label="Dpercent" source="dpercent" />
        <NumberInput label="Dretention" source="dretention" />
        <NumberInput step={1} label="Hacct" source="hacct" />
        <NumberInput step={1} label="Hcategory" source="hcategory" />
        <NumberInput step={1} label="Hcontract" source="hcontract" />
        <NumberInput step={1} label="Hcostcode" source="hcostcode" />
        <NumberInput step={1} label="Hglaptemplate" source="hglaptemplate" />
        <NumberInput step={1} label="Hjob" source="hjob" />
        <NumberInput step={1} label="Hproperty" source="hproperty" />
        <NumberInput step={1} label="Hvattrantype" source="hvattrantype" />
        <TextInput label="Snotes" source="snotes" />
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
      </SimpleForm>
    </Edit>
  );
};
