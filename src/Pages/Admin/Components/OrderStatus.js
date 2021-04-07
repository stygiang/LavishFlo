import React from "react";
import styled, { css } from "styled-components";
import {} from "react-chartjs-2";
import { config } from "../../../config";

const Container = styled.div`
  background-color: #f6f6f6;
  border-radius: 5px;
  padding: 1em;
`;
const Header = styled.div`
  line-height: 1;
  letter-spacing: 1px;

  h2 {
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-bottom: 0.5em;
  }
  p {
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;
const InteractBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`;
const ButtonsContainer = styled.div``;
const IconTextButton = styled.div`
  background-color: ${config.colors.primary};
  display: inline-block;
  padding: 0.6em 1em;
  cursor: pointer;
  margin-right: 0.8em;

  i {
    font-size: 1rem;
    color: ${config.colors.light};
    margin-right: 0.7em;
  }
  p {
    color: ${config.colors.light};
    font-size: 1rem;
    display: inline-block;
  }
`;
const IconButton = styled.div`
  padding: 0.6em 1em;
  display: inline-block;
  background-color: #eaeaea;
  &:not(last-child) {
    margin-right: 0.8em;
  }
  cursor: pointer;
  i {
    font-size: 1rem;
  }
`;
const SearchContainer = styled.div``;
const Search = styled.input`
  padding: 0.6em 1em;
  display: inline-block;
  background-color: #eaeaea;
  border: none;
  margin-right: 0.8em;
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;
const OrderStatusContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
const OrderStatusHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr 1.2fr 1fr;
  background-color: #343434;
  border-radius: 5px;
  padding: 0.8em 1em;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;
const Text = styled.p`
  font-size: 1.1rem;
  color: ${config.colors.light};
`;
const OrderStatusData = styled.div`
  padding: 0.5em 0;
`;
const StatusData = styled.div`
  display: grid;
  padding: 0 1em;
  grid-template-columns: 1fr 1.4fr 1fr 1.2fr 1fr;
  align-items: center;
  :not(last-child) {
    margin-bottom: 1em;
  }
`;
const StatusText = styled(Text)`
  color: #686868; ;
`;
const Status = styled(Text)`
  padding: 0.4em 0.8em;
  display: inline-block;
  border-radius: 5px;
  ${(p) =>
    p.process
      ? css`
          background-color: pink;
        `
      : p.open
      ? css`
          background-color: lightseagreen;
        `
      : p.onHold
      ? css`
          background-color: lightblue;
        `
      : css`
          background-color: green;
        `}
`;

const OrderStatus = () => {
  return (
    <Container>
      <Header>
        <h2>Order Status</h2>
        <p>Overviw of latest month</p>
      </Header>
      <InteractBox>
        <ButtonsContainer>
          <IconTextButton>
            <i class='fas fa-plus-circle'></i>
            <p>Add</p>
          </IconTextButton>
          <IconButton>
            <i class='fas fa-trash'></i>
          </IconButton>
          <IconButton>
            <i class='fas fa-print'></i>
          </IconButton>
          <IconButton>
            <i class='fas fa-exclamation-circle'></i>
          </IconButton>
        </ButtonsContainer>
        <SearchContainer>
          <Search type='text' placeholder='Search:' />
          <IconButton>
            <i class='fas fa-print'></i>
          </IconButton>
        </SearchContainer>
      </InteractBox>
      <OrderStatusContainer>
        <OrderStatusHead>
          <Text>Invoice</Text>
          <Text>customer</Text>
          <Text>from</Text>
          <Text>price</Text>
          <Text>status</Text>
        </OrderStatusHead>
        <OrderStatusData>
          <StatusData>
            <StatusText>11456</StatusText>
            <StatusText>Charley harway</StatusText>
            <StatusText>barzil</StatusText>
            <StatusText>$400</StatusText>
            <StatusText>
              <Status process>Process</Status>
            </StatusText>
          </StatusData>
          <StatusData>
            <StatusText>11456</StatusText>
            <StatusText>Charley harway</StatusText>
            <StatusText>barzil</StatusText>
            <StatusText>$400</StatusText>
            <StatusText>
              <Status open>Open</Status>
            </StatusText>
          </StatusData>
          <StatusData>
            <StatusText>11456</StatusText>
            <StatusText>Charley harway</StatusText>
            <StatusText>barzil</StatusText>
            <StatusText>$400</StatusText>
            <StatusText>
              <Status onHold>On Hold</Status>
            </StatusText>
          </StatusData>
        </OrderStatusData>
      </OrderStatusContainer>
    </Container>
  );
};

export default OrderStatus;
