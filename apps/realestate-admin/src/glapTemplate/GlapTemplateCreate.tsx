import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const GlapTemplateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Binactive" source="binactive" />
        <NumberInput step={1} label="Bvalid" source="bvalid" />
        <DateTimeInput label="Dtlastposted" source="dtlastposted" />
        <DateTimeInput label="Dtrangefrom" source="dtrangefrom" />
        <DateTimeInput label="Dtrangeto" source="dtrangeto" />
        <NumberInput step={1} label="Haccrualacct" source="haccrualacct" />
        <NumberInput step={1} label="Hcompany" source="hcompany" />
        <NumberInput step={1} label="Hfunding" source="hfunding" />
        <NumberInput step={1} label="Hoffsetacct" source="hoffsetacct" />
        <NumberInput step={1} label="Hperson" source="hperson" />
        <NumberInput step={1} label="Iapr" source="iapr" />
        <NumberInput step={1} label="Iaug" source="iaug" />
        <NumberInput step={1} label="Idec" source="idec" />
        <NumberInput step={1} label="Idisplaytype" source="idisplaytype" />
        <NumberInput step={1} label="Idueday" source="idueday" />
        <NumberInput step={1} label="Ifeb" source="ifeb" />
        <NumberInput step={1} label="Ijan" source="ijan" />
        <NumberInput step={1} label="Ijul" source="ijul" />
        <NumberInput step={1} label="Ijun" source="ijun" />
        <NumberInput step={1} label="Imar" source="imar" />
        <NumberInput step={1} label="Imay" source="imay" />
        <NumberInput step={1} label="Inov" source="inov" />
        <NumberInput step={1} label="Ioct" source="ioct" />
        <NumberInput step={1} label="Irecurday" source="irecurday" />
        <NumberInput step={1} label="Isep" source="isep" />
        <NumberInput step={1} label="Istatus" source="istatus" />
        <NumberInput step={1} label="Samount" source="samount" />
        <TextInput label="Scode" source="scode" />
        <TextInput label="Sdesc" source="sdesc" />
        <TextInput label="Sexpensetype" source="sexpensetype" />
        <TextInput label="Snotes" source="snotes" />
        <TextInput label="Spostcode" source="spostcode" />
      </SimpleForm>
    </Create>
  );
};
