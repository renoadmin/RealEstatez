import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GlAllocateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GlAllocates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Bcustomsource" source="bcustomsource" />
        <TextField label="Haccttree" source="haccttree" />
        <TextField label="Haccttreedetail" source="haccttreedetail" />
        <TextField label="Hchart" source="hchart" />
        <TextField label="Hoffsetacct" source="hoffsetacct" />
        <TextField label="Ibalancebydetails" source="ibalancebydetails" />
        <TextField label="Ibalancingsource" source="ibalancingsource" />
        <TextField label="Iconsolidatebooks" source="iconsolidatebooks" />
        <TextField label="Id" source="id" />
        <TextField label="Idelta" source="idelta" />
        <TextField label="Idetail" source="idetail" />
        <TextField
          label="Iincludesourcesegments"
          source="iincludesourcesegments"
        />
        <TextField
          label="Iincludeuserdeffields"
          source="iincludeuserdeffields"
        />
        <TextField label="Iintercompany" source="iintercompany" />
        <TextField label="Ipropertysegment" source="ipropertysegment" />
        <TextField label="Ireverseje" source="ireverseje" />
        <TextField label="Isqftcolumn" source="isqftcolumn" />
        <TextField label="Isuppresssegment" source="isuppresssegment" />
        <TextField label="Iunpostbatch" source="iunpostbatch" />
        <TextField label="Scode" source="scode" />
        <TextField label="Scolumnname" source="scolumnname" />
        <TextField label="Sdatecolumn" source="sdatecolumn" />
        <TextField label="Sfrombook" source="sfrombook" />
        <TextField label="Sname" source="sname" />
        <TextField label="Snotes" source="snotes" />
        <TextField label="Sreference" source="sreference" />
        <TextField label="Ssourcecolumnname" source="ssourcecolumnname" />
        <TextField label="Ssourcedatecolumn" source="ssourcedatecolumn" />
        <TextField label="Ssourcetablename" source="ssourcetablename" />
        <TextField label="Ssourcetype" source="ssourcetype" />
        <TextField label="Stablename" source="stablename" />
        <TextField label="Stype" source="stype" />
        <TextField label="Suserdef1" source="suserdef1" />
        <TextField label="Suserdef2" source="suserdef2" />
        <TextField label="Suserdef3" source="suserdef3" />
        <TextField label="Suserdef4" source="suserdef4" />
        <TextField label="Suserdef5" source="suserdef5" />
        <TextField label="Suserdef6" source="suserdef6" />
        <TextField label="Suserdef7" source="suserdef7" />
        <TextField label="Suserdef8" source="suserdef8" />
      </Datagrid>
    </List>
  );
};
