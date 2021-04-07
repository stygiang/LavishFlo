import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { config } from "../config";

const PageWidth = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const Nav = styled.div`
  width: 100%;
  padding: 1em 0;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  align-items: end;
  h1 {
    color: ${config.colors.primary};
    display: inline-block;
    font-size: 1.5rem;
  }
  p {
    color: ${config.colors.light};
    display: inline-block;
    font-size: 1rem;
  }
`;
const LinksContainer = styled.div``;
const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: ${config.colors.light};
  &:not(last-child) {
    margin-right: 0.7em;
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <PageWidth>
        <NavContainer>
          <LogoContainer>
            <h1>Lavish</h1>
            <p>Flo</p>
          </LogoContainer>
          <LinksContainer>
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
          </LinksContainer>
        </NavContainer>
      </PageWidth>
    </Nav>
  );
};

export default Navbar;
