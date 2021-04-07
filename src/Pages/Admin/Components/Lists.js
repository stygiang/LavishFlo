import React from "react";
import styled from "styled-components";
import { config } from "../../../config";
import Projects from "./Projects";
import { Line, Bar } from "react-chartjs-2";
import IncomeSummary from "./IncomeSummary";
import OrderStatus from "./OrderStatus";
import TotalRevenue from "./TotalRevenue";
import FormsSubmitted from "./FormsSubmitted";
import RecentOrders from "./RecentOrders";

const Container = styled.div`
  margin: 2em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;

  @supports (grid-template-rows: masonry) {
    grid-template-rows: masonry;
  }
`;

const Lists = () => {
  return (
    <Container>
      <Projects />
      <RecentOrders />
      <IncomeSummary />
      <OrderStatus />
      <TotalRevenue />
      <FormsSubmitted />
    </Container>
  );
};

export default Lists;
