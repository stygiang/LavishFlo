import React from "react";
import styled from "styled-components";
import { config } from "../config";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "Title Title Title"
    "Info Info ."
    "Button Button Button";
  border-radius: 7px;
  border-top: 3px solid ${config.colors.primary};
  width: 350px;
  grid-row-gap: 1.5em;
  background-color: #f2f2f2;
  padding: 1em;
`;
const Title = styled.h2`
  grid-area: Title;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
`;
const Info = styled.div`
  grid-area: Info;
`;
const Text = styled.p`
  font-size: 1rem;
`;
const ButtonContainer = styled.div`
  grid-area: Button;
  text-align: center;
`;
const Button = styled.p`
  display: inline-block;

  padding: 0.5em 3.5em;
  border-radius: 5px;
  color: ${config.colors.light};
  cursor: pointer;
  background-color: ${config.colors.primary};
`;

const Card = () => {
  return (
    <Container>
      <Title>Hello</Title>
      <Info>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
        </Text>
      </Info>
      <ButtonContainer>
        <Button>hello</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Card;
