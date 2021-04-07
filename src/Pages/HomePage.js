import React from "react";
import styled from "styled-components";
import AboutUs from "../Layout/AboutUs";
import CardContainer from "../Layout/CardContainer";
import Header from "../Layout/Header";
import IconsContainer from "../Layout/IconsContainer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CardContainer />
      <IconsContainer />
      <AboutUs />
    </div>
  );
};

export default HomePage;
