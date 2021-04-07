import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Counter from "./Components/Counter";
import Lists from "./Components/Lists";

const Container = styled.div`
  width: 100%;
  padding: 2em;

  margin-left: 350px;
`;

const Dashboard = () => {
  let cc = useRef(null);

  const adminSidePanel = useSelector((s) => s.adminSidePanel);
  const { show } = adminSidePanel;
  useEffect(() => {
    if (show) {
      gsap.to(cc, { marginLeft: "350px" });
    } else {
      gsap.to(cc, { marginLeft: "70px" });
    }
  }, [show]);
  return (
    <Container ref={(e) => (cc = e)}>
      <Counter />
      <Lists />
    </Container>
  );
};

export default Dashboard;
