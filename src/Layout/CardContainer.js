import React from "react";
import styled from "styled-components";
import Card from "../Components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3em 0;
`;

const CardContainer = () => {
  return (
    <Container>
      <Card />
      <Card />
    </Container>
  );
};

export default CardContainer;
