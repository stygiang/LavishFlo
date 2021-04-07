import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;
`;

const MasonaryLayout = () => {
  return (
    <Container>
      <img src='images/Header.jpg' alt='head' />
      <img src='images/Header.jpg' alt='head' />
      <img src='images/Header.jpg' alt='head' />
      <img src='images/Header.jpg' alt='head' />
      <img src='images/Header.jpg' alt='head' />
      <img src='images/Header.jpg' alt='head' />
      <img src='images/Header.jpg' alt='head' />
      <img src='images/Header.jpg' alt='head' />
      <img src='images/Header.jpg' alt='head' />
    </Container>
  );
};

export default MasonaryLayout;
