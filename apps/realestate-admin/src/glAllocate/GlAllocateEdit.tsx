import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GlAllocateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Bcustomsource" source="bcustomsource" />
        <NumberInput step={1} label="Haccttree" source="haccttree" />
        <NumberInput
          step={1}
          label="Haccttreedetail"
          source="haccttreedetail"
        />
        <NumberInput step={1} label="Hchart" source="hchart" />
        <NumberInput step={1} label="Hoffsetacct" source="hoffsetacct" />
        <NumberInput
          step={1}
          label="Ibalancebydetails"
          source="ibalancebydetails"
        />
        <NumberInput
          step={1}
          label="Ibalancingsource"
          source="ibalancingsource"
        />
        <NumberInput
          step={1}
          label="Iconsolidatebooks"
          source="iconsolidatebooks"
        />
        <NumberInput step={1} label="Idelta" source="idelta" />
        <NumberInput step={1} label="Idetail" source="idetail" />
        <NumberInput
          step={1}
          label="Iincludesourcesegments"
          source="iincludesourcesegments"
        />
        <NumberInput
          step={1}
          label="Iincludeuserdeffields"
          source="iincludeuserdeffields"
        />
        <NumberInput step={1} label="Iintercompany" source="iintercompany" />
        <NumberInput
          step={1}
          label="Ipropertysegment"
          source="ipropertysegment"
        />
        <NumberInput step={1} label="Ireverseje" source="ireverseje" />
        <NumberInput step={1} label="Isqftcolumn" source="isqftcolumn" />
        <NumberInput
          step={1}
          label="Isuppresssegment"
          source="isuppresssegment"
        />
        <NumberInput step={1} label="Iunpostbatch" source="iunpostbatch" />
        <TextInput label="Scode" source="scode" />
        <TextInput label="Scolumnname" source="scolumnname" />
        <TextInput label="Sdatecolumn" source="sdatecolumn" />
        <TextInput label="Sfrombook" source="sfrombook" />
        <TextInput label="Sname" source="sname" />
        <TextInput label="Snotes" source="snotes" />
        <TextInput label="Sreference" source="sreference" />
        <TextInput label="Ssourcecolumnname" source="ssourcecolumnname" />
        <TextInput label="Ssourcedatecolumn" source="ssourcedatecolumn" />
        <TextInput label="Ssourcetablename" source="ssourcetablename" />
        <TextInput label="Ssourcetype" source="ssourcetype" />
        <TextInput label="Stablename" source="stablename" />
        <TextInput label="Stype" source="stype" />
        <TextInput label="Suserdef1" source="suserdef1" />
        <TextInput label="Suserdef2" source="suserdef2" />
        <TextInput label="Suserdef3" source="suserdef3" />
        <TextInput label="Suserdef4" source="suserdef4" />
        <TextInput label="Suserdef5" source="suserdef5" />
        <TextInput label="Suserdef6" source="suserdef6" />
        <TextInput label="Suserdef7" source="suserdef7" />
        <TextInput label="Suserdef8" source="suserdef8" />
      </SimpleForm>
    </Edit>
  );
};
