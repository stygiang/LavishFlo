import React from "react";
import styled from "styled-components";
import { config } from "../../../config";

const DataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2em;
`;
const DataItem = styled.div`
  background-color: #f6f6f6;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "Info Icon";
  padding: 2.5em 2em;
  align-items: center;
`;
const DataItemInfo = styled.div`
  grid-area: Info;
  line-height: 1.2;
  h2 {
    font-weight: 700;
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
    letter-spacing: 1.3px;
  }
`;
const Icon = styled.div`
  grid-area: Icon;
  i {
    font-size: 3.5rem;
    color: ${config.colors.primary};
  }
`;

const Counter = () => {
  return (
    <div>
      <DataContainer>
        <DataItem>
          <DataItemInfo>
            <h2>60</h2>
            <p>Customers</p>
          </DataItemInfo>
          <Icon>
            <i class='fas fa-users'></i>
          </Icon>
        </DataItem>
        <DataItem>
          <DataItemInfo>
            <h2>60</h2>
            <p>Orders</p>
          </DataItemInfo>
          <Icon>
            <i class='fas fa-book'></i>
          </Icon>
        </DataItem>
        <DataItem>
          <DataItemInfo>
            <h2>60</h2>
            <p>Live Viewers</p>
          </DataItemInfo>
          <Icon>
            <i class='fas fa-globe-asia'></i>
          </Icon>
        </DataItem>
        <DataItem>
          <DataItemInfo>
            <h2>60</h2>
            <p>Forms Submitted</p>
          </DataItemInfo>
          <Icon>
            <i class='fas fa-align-center'></i>
          </Icon>
        </DataItem>
      </DataContainer>
    </div>
  );
};

export default Counter;
