import React from "react";
import styled from "styled-components";
import { config } from "../config";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* background-color: #f2f2f2; */
  width: 300px;
  gap: 1em;
  text-align: center;
`;
const Icon = styled.div`
  text-align: center;
  i {
    font-size: 4.5rem;
    color: ${config.colors.primary};
  }
`;
const Head = styled.h3`
  text-align: center;
  font-size: 1.5rem;
`;
const Text = styled.p``;

const IconDesc = () => {
  return (
    <Container>
      <Icon>
        <i class='far fa-clock'></i>
      </Icon>
      <Head>Fast</Head>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting,
      </Text>
    </Container>
  );
};

export default IconDesc;
