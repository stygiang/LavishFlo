import { motion } from "framer-motion";
import React from "react";

import styled from "styled-components";

const Slide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ImgSlide = ({ img }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 4, ease: "easeInOut" }}
    >
      <Slide src={img} />
    </motion.div>
  );
};

export default ImgSlide;
