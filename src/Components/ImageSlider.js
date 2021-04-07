import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import ImgSlide from "./ImgSlide";

const Container = styled.div`
  width: 100%;
  height: 500px;
`;
const photos = [
  "images/Header.jpg",
  "images/picture1.jpg",
  "images/picture2.jpg",
];

const ImageSlider = () => {
  let [current, setCurrent] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (current === 2) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 2000);
  }, [current]);
  // setInterval(() => {
  //   console.log(current);
  // }, 3000);

  return (
    <AnimatePresence exitBeforeEnter>
      <Container>
        {current === 0 ? (
          <ImgSlide img={photos[0]} />
        ) : current === 1 ? (
          <ImgSlide img={photos[1]} />
        ) : current === 2 ? (
          <ImgSlide img={photos[2]} />
        ) : (
          <ImgSlide img={photos[0]} />
        )}
      </Container>
    </AnimatePresence>
  );
};

export default ImageSlider;
