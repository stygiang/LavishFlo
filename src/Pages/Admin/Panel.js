import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import EditProjectModeal from "./Components/models/EditProjectModeal";
import Dashboard from "./Dashboard";
import Forms from "./Forms";
import Models from "./Models";
import Sidebar from "./Sidebar";

const Container = styled.div`
  display: flex;
  gap: 1em;
  background-color: #eaeaea;
  height: 100%;
`;

const Panel = () => {
  return (
    <Container>
      <Sidebar />
      <Route path='/admin_dashboard' component={Dashboard} />
      <Route path='/admin_forms' component={Forms} />
      <Models />
    </Container>
  );
};

export default Panel;
