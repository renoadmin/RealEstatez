import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GlapTemplateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GlapTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Binactive" source="binactive" />
        <TextField label="Bvalid" source="bvalid" />
        <TextField label="Dtlastposted" source="dtlastposted" />
        <TextField label="Dtrangefrom" source="dtrangefrom" />
        <TextField label="Dtrangeto" source="dtrangeto" />
        <TextField label="Haccrualacct" source="haccrualacct" />
        <TextField label="Hcompany" source="hcompany" />
        <TextField label="Hfunding" source="hfunding" />
        <TextField label="Hoffsetacct" source="hoffsetacct" />
        <TextField label="Hperson" source="hperson" />
        <TextField label="Iapr" source="iapr" />
        <TextField label="Iaug" source="iaug" />
        <TextField label="Id" source="id" />
        <TextField label="Idec" source="idec" />
        <TextField label="Idisplaytype" source="idisplaytype" />
        <TextField label="Idueday" source="idueday" />
        <TextField label="Ifeb" source="ifeb" />
        <TextField label="Ijan" source="ijan" />
        <TextField label="Ijul" source="ijul" />
        <TextField label="Ijun" source="ijun" />
        <TextField label="Imar" source="imar" />
        <TextField label="Imay" source="imay" />
        <TextField label="Inov" source="inov" />
        <TextField label="Ioct" source="ioct" />
        <TextField label="Irecurday" source="irecurday" />
        <TextField label="Isep" source="isep" />
        <TextField label="Istatus" source="istatus" />
        <TextField label="Samount" source="samount" />
        <TextField label="Scode" source="scode" />
        <TextField label="Sdesc" source="sdesc" />
        <TextField label="Sexpensetype" source="sexpensetype" />
        <TextField label="Snotes" source="snotes" />
        <TextField label="Spostcode" source="spostcode" />
      </Datagrid>
    </List>
  );
};
