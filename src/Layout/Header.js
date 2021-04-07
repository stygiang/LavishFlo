import React, { useState } from "react";
import styled from "styled-components";
import { config } from "../config";
import Navbar from "./Navbar";
import validator from "validator";
import ej, { init } from "emailjs-com";
init("user_3XnTqkuyKOvzqgu25mlaq");

const Head = styled.div`
  height: 75vh;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.75) 0%
    ),
    url("Images/Header.jpg");
  background-position: center;
  object-fit: cover;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "Form Text";
  grid-column-gap: 3em;
  align-items: center;
  height: 400px;
`;

const FormContainer = styled.div`
  grid-area: Form;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.div`
  padding: 1em;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 5px;

  width: 50%;
`;
const Formhead = styled.div`
  line-height: 1;
  text-align: center;
  font-size: 2.5rem;

  h2 {
  }

  span {
    font-weight: 600;
    color: ${config.colors.primary};
  }
`;
const InputsContainer = styled.div`
  text-align: center;
`;
const Input = styled.input`
  width: 50%;
  padding: 0.5em 0;
  border: none;
  background: transparent;
  border-bottom: 1px solid black;
  transition: border-bottom 500ms;
  &:not(last-child) {
    margin-bottom: 1em;
  }
  &:focus,
  :active {
    outline: none;
    border-bottom: 1px solid ${config.colors.primary};
  }
  &::placeholder {
    /* color: ${config.colors.primary}; */
  }
`;
const ButtonContainer = styled.div`
  text-align: center;
`;
const Button = styled.p`
  display: inline-block;
  border-radius: 5px;
  text-align: center;
  padding: 0.6em 2em;
  text-transform: capitalize;
  background-color: ${config.colors.primary};
  color: ${config.colors.light};
`;
const TextContainer = styled.div`
  grid-area: Text;
`;
const HeadText = styled.h2`
  text-align: center;
  font-size: 4.5rem;
  text-transform: capitalize;
  color: ${config.colors.light};
  span {
    color: ${config.colors.primary};
  }
`;

const Header = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

  const onSubmitHandler = () => {
    var templateParams = {
      to_name: "boss",
      from_name: name,
      message: message,
      email: email,
    };
    if (
      validator.isEmail(email) &&
      !validator.isEmpty(message) &&
      !validator.isEmpty(name)
    ) {
      setEmailError(false);
      ej.send("service_pbib4gk", "template_qm51wjf", templateParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        },
      );
      setEmail("");
      setMessage("");
      setName("");
    } else {
      setEmailError(true);
    }
  };
  return (
    <Head>
      <Navbar />
      <Content>
        <FormContainer>
          <Form>
            <Formhead>
              <h2>Need a</h2>
              <span>Website</span>?
            </Formhead>
            <InputsContainer>
              <Input
                type='text'
                placeholder='Enter name:'
                name='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <br />
              <Input
                type='email'
                placeholder='Enter email:'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <Input
                type='text'
                placeholder='Enter Message:'
                name='message'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </InputsContainer>
            <ButtonContainer>
              <Button onClick={onSubmitHandler}>Submit</Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
        <TextContainer>
          <HeadText>
            we give a Natural <span>flow</span> to your website
          </HeadText>
        </TextContainer>
      </Content>
    </Head>
  );
};

export default Header;
