import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GlAllocateList } from "./glAllocate/GlAllocateList";
import { GlAllocateCreate } from "./glAllocate/GlAllocateCreate";
import { GlAllocateEdit } from "./glAllocate/GlAllocateEdit";
import { GlAllocateShow } from "./glAllocate/GlAllocateShow";
import { GlAllocateDetailList } from "./glAllocateDetail/GlAllocateDetailList";
import { GlAllocateDetailCreate } from "./glAllocateDetail/GlAllocateDetailCreate";
import { GlAllocateDetailEdit } from "./glAllocateDetail/GlAllocateDetailEdit";
import { GlAllocateDetailShow } from "./glAllocateDetail/GlAllocateDetailShow";
import { GlAllocateHistoryList } from "./glAllocateHistory/GlAllocateHistoryList";
import { GlAllocateHistoryCreate } from "./glAllocateHistory/GlAllocateHistoryCreate";
import { GlAllocateHistoryEdit } from "./glAllocateHistory/GlAllocateHistoryEdit";
import { GlAllocateHistoryShow } from "./glAllocateHistory/GlAllocateHistoryShow";
import { GlapTemplateList } from "./glapTemplate/GlapTemplateList";
import { GlapTemplateCreate } from "./glapTemplate/GlapTemplateCreate";
import { GlapTemplateEdit } from "./glapTemplate/GlapTemplateEdit";
import { GlapTemplateShow } from "./glapTemplate/GlapTemplateShow";
import { GlapTemplateDetailList } from "./glapTemplateDetail/GlapTemplateDetailList";
import { GlapTemplateDetailCreate } from "./glapTemplateDetail/GlapTemplateDetailCreate";
import { GlapTemplateDetailEdit } from "./glapTemplateDetail/GlapTemplateDetailEdit";
import { GlapTemplateDetailShow } from "./glapTemplateDetail/GlapTemplateDetailShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Realestate"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="GlAllocate"
          list={GlAllocateList}
          edit={GlAllocateEdit}
          create={GlAllocateCreate}
          show={GlAllocateShow}
        />
        <Resource
          name="GlAllocateDetail"
          list={GlAllocateDetailList}
          edit={GlAllocateDetailEdit}
          create={GlAllocateDetailCreate}
          show={GlAllocateDetailShow}
        />
        <Resource
          name="GlAllocateHistory"
          list={GlAllocateHistoryList}
          edit={GlAllocateHistoryEdit}
          create={GlAllocateHistoryCreate}
          show={GlAllocateHistoryShow}
        />
        <Resource
          name="GlapTemplate"
          list={GlapTemplateList}
          edit={GlapTemplateEdit}
          create={GlapTemplateCreate}
          show={GlapTemplateShow}
        />
        <Resource
          name="GlapTemplateDetail"
          list={GlapTemplateDetailList}
          edit={GlapTemplateDetailEdit}
          create={GlapTemplateDetailCreate}
          show={GlapTemplateDetailShow}
        />
      </Admin>
    </div>
  );
};

export default App;
