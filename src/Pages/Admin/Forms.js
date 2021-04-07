import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { config } from "../../config";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { editProjectOpen } from "../../actions/modelActions";
import gsap from "gsap";

const Container = styled.div`
  margin-left: 350px;
  display: grid;
  width: 100%;

  padding: 3em;

  @supports (grid-template-rows: masonry) {
    grid-template-rows: masonry;
  }
`;
const Header = styled.h2`
  font-size: ${config.FontSizes.xl};
  text-transform: capitalize;
  font-weight: 500;
`;
const PickerContainer = styled.div`
  margin: 1em 0;
  border-bottom: 1px solid rgba(138, 138, 138, 0.2);
`;
const Text = styled.p`
  display: inline-block;
  cursor: pointer;
  font-size: ${config.FontSizes.small};
  padding: 0.4em 0;
  letter-spacing: 1px;
  color: ${config.colors.fontLight};
  text-transform: capitalize;
  ${(p) =>
    p.picker &&
    css`
      &:not(last-child) {
        margin-right: 2em;
      }
    `}
  ${(p) =>
    p.active &&
    css`
      color: ${config.colors.fontDark};
      border-bottom: 1px solid ${config.colors.primary};
    `};
`;
const Button = styled.p`
  display: inline-block;
  padding: 0.5em 2em;
  color: ${config.colors.light};
  background-color: ${config.colors.primary};
  font-size: ${config.FontSizes.medium};
  text-transform: capitalize;
  cursor: pointer;
  transition: transform 300ms;
  border-radius: 5px;
  margin: 0.5em 0;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const FormHeader = styled.div`
  display: grid;
  padding: 1em;
  grid-template-columns: 1.5fr 1.2fr 1fr 1fr 1.3fr;
`;
const FormDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
`;
const FormData = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.2fr 1fr 1fr 1.3fr;
  padding: 1em 1em;
  border-radius: 2px;
  background-color: ${config.colors.light};
`;
const ToolsContainer = styled.div`
  color: ${config.colors.fontLight};
  ${Text} {
    margin-right: 0.4em;
    transition: color 300ms;
    &:nth-child(2) {
      margin-left: 0.4em;
    }
    &:nth-child(3) {
      margin-left: 0.4em;
    }
    &:hover {
      color: ${config.colors.primary};
    }
  }
`;
const Status = styled(Text)`
  padding: 0.4em 0.8em;
  display: inline-block;
  border-radius: 5px;
  justify-self: start;
  color: ${config.colors.light};
  ${(p) =>
    p.notCompleted
      ? css`
          background-color: red;
        `
      : p.completed
      ? css`
          background-color: lightgreen;
        `
      : p.onHold
      ? css`
          background-color: lightblue;
        `
      : css`
          background-color: green;
          filter: brightness(50%);
        `};
`;
const Forms = () => {
  const dispatch = useDispatch();
  /* const EditProjectModel = useSelector((s) => s.editProjectModel);
  const { show } = EditProjectModel; */
  const EditModelShow = () => {
    console.log("hello");
    dispatch(editProjectOpen());
  };
  let cc = useRef(null);
  const adminSidePanel = useSelector((s) => s.adminSidePanel);
  const { show: ads } = adminSidePanel;
  useEffect(() => {
    if (ads) {
      gsap.to(cc, { marginLeft: "350px" });
    } else {
      gsap.to(cc, { marginLeft: "70px" });
    }
  }, [ads]);
  return (
    <Container ref={(e) => (cc = e)}>
      <Header>Projects</Header>
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <PickerContainer>
          <Text active picker>
            Edit
          </Text>
          <Text picker>Create</Text>
        </PickerContainer>
      </motion.div>
      <div>
        <Button>Edit</Button>
      </div>
      <FormHeader>
        <Text>Name</Text>
        <Text>Date</Text>
        <Text>Status</Text>
        <Text>Location</Text>
        <Text>Tools</Text>
      </FormHeader>
      <FormDataContainer>
        <FormData>
          <Text>locklyns pedow</Text>
          <Text>Feb 02,2020</Text>
          <Status open>Completed</Status>
          <Text>new york</Text>
          <ToolsContainer>
            <Text onClick={EditModelShow}>edit </Text>/<Text>delete </Text>/
            <Text>settings </Text>
          </ToolsContainer>
        </FormData>
        <FormData>
          <Text>jhonsons dove</Text>
          <Text>Feb 02,2020</Text>
          <Status notCompleted>Not Completed</Status>
          <Text>new york</Text>
          <ToolsContainer>
            <Text>edit </Text>/<Text>delete </Text>/<Text>settings </Text>
          </ToolsContainer>
        </FormData>
        <FormData>
          <Text>Borlow havens</Text>
          <Text>Feb 02,2020</Text>
          <Status open>Completed</Status>
          <Text>new york</Text>
          <ToolsContainer>
            <Text>edit </Text>/<Text>delete </Text>/<Text>settings </Text>
          </ToolsContainer>
        </FormData>
      </FormDataContainer>
    </Container>
  );
};

export default Forms;
