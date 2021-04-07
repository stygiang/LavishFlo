import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 7em;
  /* width: 100%; */
  height: 400px;
  background-color: #f2f2f2;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const TextContainer = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  div {
    h1 {
      font-size: 2.5rem;
      text-transform: uppercase;
      margin-bottom: 1em;
    }
    p {
      font-size: 1.3rem;
      line-height: 1.2;
      max-width: 500px;
    }
  }
`;

const ImageContainer = styled.div``;

const AboutUs = () => {
  return (
    <Container>
      <Content>
        <TextContainer>
          <div>
            <h1>About Us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting,
            </p>
          </div>
        </TextContainer>
        <ImageContainer></ImageContainer>
      </Content>
    </Container>
  );
};

export default AboutUs;
