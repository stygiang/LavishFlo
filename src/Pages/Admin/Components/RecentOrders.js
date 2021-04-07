import React from "react";
import styled from "styled-components";
import { config } from "../../../config";

const Container = styled.div`
  display: grid;
  padding: 1em;
  background-color: #f6f6f6;
  border-radius: 5px;
`;
const Text = styled.p`
  font-size: 1.5rem;
  text-transform: capitalize;
`;
const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5em;
`;
const Order = styled.div`
  border-radius: 20px;
  padding: 0.5em;
  /* border: 1px solid ${config.colors.primary}; */
  display: grid;
  gap: 1em;
  grid-template-columns: 0.7fr 3fr 0.2fr;
  align-items: center;
`;
const OrderIcon = styled.div`
  i {
    font-size: 2.5rem;
  }
`;
const OrderInfo = styled.div``;
const OrderInfoHead = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 1px;
  text-transform: capitalize;
  line-height: 1.5;
`;
const OrderSubHeader = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;
const Notification = styled.p`
  padding: 0.5em 1em;
  font-size: 0.8rem;
  background-color: ${config.colors.primary};
  color: ${config.colors.light};
  display: inline-block;
  border-radius: 10px;
  text-transform: uppercase;
`;
const OrderMoreIcon = styled.div`
  i {
    font-size: 1rem;
  }
`;
const RecentOrders = () => {
  return (
    <Container>
      <Text>recent orders</Text>
      <OrderContainer>
        <Order>
          <OrderIcon>
            <i class='fab fa-blogger-b'></i>
          </OrderIcon>
          <OrderInfo>
            <OrderInfoHead>
              Ua Sports <Notification>New</Notification>
            </OrderInfoHead>

            <OrderSubHeader>11752973</OrderSubHeader>
          </OrderInfo>
          <OrderMoreIcon>
            <i class='fas fa-chevron-right'></i>
          </OrderMoreIcon>
        </Order>
        <Order>
          <OrderIcon>
            <i class='fab fa-blogger-b'></i>
          </OrderIcon>
          <OrderInfo>
            <OrderInfoHead>
              Ua Sports <Notification>New</Notification>
            </OrderInfoHead>

            <OrderSubHeader>11752973</OrderSubHeader>
          </OrderInfo>
          <OrderMoreIcon>
            <i class='fas fa-chevron-right'></i>
          </OrderMoreIcon>
        </Order>
        <Order>
          <OrderIcon>
            <i class='fab fa-blogger-b'></i>
          </OrderIcon>
          <OrderInfo>
            <OrderInfoHead>
              Ua Sports <Notification>New</Notification>
            </OrderInfoHead>

            <OrderSubHeader>11752973</OrderSubHeader>
          </OrderInfo>
          <OrderMoreIcon>
            <i class='fas fa-chevron-right'></i>
          </OrderMoreIcon>
        </Order>
      </OrderContainer>
    </Container>
  );
};

export default RecentOrders;
