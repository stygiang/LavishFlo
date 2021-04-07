// import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import EditProjectModeal from "./Components/models/EditProjectModeal";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  margin-left: 350px;
`;

const Models = () => {
  // const dispatch = useDispatch();
  const ModelShow = useSelector((s) => s.editProjectModel);
  const { show } = ModelShow;
  return <Container>{show && <EditProjectModeal />}</Container>;
};

export default Models;
