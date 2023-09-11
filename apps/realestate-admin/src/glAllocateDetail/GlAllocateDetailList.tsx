import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GlAllocateDetailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GlAllocateDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Dfactor" source="dfactor" />
        <TextField label="Hacct" source="hacct" />
        <TextField label="Haccttreedetail" source="haccttreedetail" />
        <TextField label="Hfromacct" source="hfromacct" />
        <TextField label="Hglallocate" source="hglallocate" />
        <TextField label="Hoffsetacct" source="hoffsetacct" />
        <TextField label="Ibudget" source="ibudget" />
        <TextField label="Id" source="id" />
        <TextField label="Iexclude" source="iexclude" />
        <TextField label="Igroup" source="igroup" />
        <TextField label="Inegate" source="inegate" />
        <TextField label="Iorder" source="iorder" />
        <TextField label="Iptd" source="iptd" />
        <TextField label="Sacctdescription" source="sacctdescription" />
        <TextField label="Sacctnode" source="sacctnode" />
        <TextField label="Sbook" source="sbook" />
        <TextField label="Scalctype" source="scalctype" />
        <TextField label="Sformula" source="sformula" />
        <TextField label="Snotes" source="snotes" />
        <TextField label="Spropertylist" source="spropertylist" />
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
        <TextField label="Stocolumnname" source="stocolumnname" />
        <TextField label="Stype" source="stype" />
      </Datagrid>
    </List>
  );
};
