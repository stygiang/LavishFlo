import React from "react";
import styled from "styled-components";
import IconDesc from "../Components/IconDesc";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3em 0;
`;

const IconsContainer = () => {
  return (
    <Container>
      <IconDesc />
      <IconDesc />
      <IconDesc />
    </Container>
  );
};

export default IconsContainer;
