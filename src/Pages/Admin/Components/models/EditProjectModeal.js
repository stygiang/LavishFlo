import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { editProjectClose } from "../../../../actions/modelActions";
import { config } from "../../../../config";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(190, 190, 190, 0.4);
`;
const Model = styled.div`
  display: inline-block;
  width: 30%;
  max-width: 500px;
  background-color: ${config.colors.light};
  transform: translate(-30%, -50%);
  border-radius: 5px;
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
    p.xl &&
    css`
      font-size: ${config.FontSizes.xl};
    `}
  ${(p) =>
    p.center &&
    css`
      display: block;
      text-align: center;
    `}
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
const HeadIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: ${config.FontSizes.large};
    color: ${config.colors.fontLight};
    transition: color 300ms;
    &:hover {
      color: ${config.colors.primary};
    }
  }
`;
const HeadBox = styled.div`
  display: grid;
  grid-template-columns: 5fr 0.9fr;
  /* margin: 1.5em; */
  ${Text} {
    margin-left: 1.5em;
  }
  ${HeadIcon} {
    border-left: 0.5px solid ${config.colors.fontLight};
  }
  border: 0.5px solid ${config.colors.fontLight};
  /* box-shadow: 0px 5px 50px -15px rgba(0, 0, 0, 0.75); */
`;
const FormBox = styled.div`
  padding: 2em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  flex-direction: column;
`;
const StyledInput = styled.input`
  display: inline-block;
  padding: 0.5em 1.5em;
  /* max-width: 400px; */
  width: 50%;
  text-transform: capitalize;

  color: ${config.colors.fontLight};
  font-size: ${config.FontSizes.small};
  border: 0.5px solid ${config.colors.fontLight};
  transition: border 300ms;

  &:focus {
    border: none;
    outline: none;
    border: 0.5px solid ${config.colors.primary};
  }
  &:active {
    border: none;
    border: 0.5px solid ${config.colors.primary};
  }
`;
const ButtonContainer = styled.div`
  text-align: center;
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
  ${(p) =>
    p.wide &&
    css`
      padding: 0.5em 3em;
    `}
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const EditProjectModel = () => {
  const dispatch = useDispatch();
  const ModelShow = useSelector((s) => s.editProjectModel);
  const { show } = ModelShow;
  const EditModelExit = () => {
    dispatch(editProjectClose());
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Model>
          <HeadBox>
            <Text xl center>
              Edit Project
            </Text>
            <HeadIcon>
              <i onClick={EditModelExit} class='fas fa-times'></i>
            </HeadIcon>
          </HeadBox>
          <FormBox>
            <StyledInput type='text' placeholder='Name:' />
            <StyledInput type='text' placeholder='isDisplayed:' />
            <StyledInput type='text' placeholder='Description:' />
            <StyledInput type='text' placeholder='upload image:' />
          </FormBox>
          <ButtonContainer>
            <Button wide>Edit Project</Button>
          </ButtonContainer>
        </Model>
      </Container>
    </motion.div>
  );
};

export default EditProjectModel;
