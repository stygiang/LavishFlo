import React from "react";
import styled, { css } from "styled-components";
import { config } from "../../../config";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1em;
  background-color: #f6f6f6;
`;
const Header = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;
const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.8fr;
  padding: 0.5em 0;
`;
const Text = styled.p`
  display: inline-block;
  font-size: 1rem;
  letter-spacing: 1.5px;
`;
const ListDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
`;
const ListData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.8fr;
`;
const ListDataText = styled(Text)`
  font-weight: 500;
  font-size: 1.5rem;
`;

const Status = styled(Text)`
  padding: 0.4em 0.8em;
  display: inline-block;
  border-radius: 5px;
  color: ${config.colors.light};
  font-size: 1.1rem;
  text-transform: capitalize;
  ${(p) =>
    p.process
      ? css`
          background-color: pink;
        `
      : p.checked
      ? css`
          background-color: lightseagreen;
        `
      : p.unChecked
      ? css`
          background-color: red;
        `
      : css`
          background-color: green;
        `};
`;

const FormsSubmitted = () => {
  return (
    <Container>
      <Header>
        <h2>Forms Submitted</h2>
      </Header>
      <ListHeader>
        <Text>Name</Text>
        <Text>Amount</Text>
        <Text>Status</Text>
      </ListHeader>
      <ListDataContainer>
        <ListData>
          <ListDataText>Need a Website</ListDataText>
          <ListDataText>53</ListDataText>
          <ListDataText>
            <Status open>checked</Status>
          </ListDataText>
        </ListData>
        <ListData>
          <ListDataText>Need a Website</ListDataText>
          <ListDataText>53</ListDataText>
          <ListDataText>
            <Status open>checked</Status>
          </ListDataText>
        </ListData>
        <ListData>
          <ListDataText>Need a Website</ListDataText>
          <ListDataText>53</ListDataText>
          <ListDataText>
            <Status unChecked> Not checked</Status>
          </ListDataText>
        </ListData>
      </ListDataContainer>
    </Container>
  );
};

export default FormsSubmitted;
