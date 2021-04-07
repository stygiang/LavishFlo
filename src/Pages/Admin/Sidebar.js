import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { config } from "../../config";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import {
  CloseAdminSidePanel,
  OpenAdminSidePanel,
} from "../../actions/AdminPanelAction";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 60px;
  height: 100%;
  background-color: ${config.colors.light};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-items: center;
  overflow: hidden;

  /* height: 100vh; */
`;
const InnerContainer = styled.div`
  padding: 0 2.3em;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  position: relative;

  width: 200px;
  height: 100%;
  background-color: ${config.colors.light};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  /* height: 100vh; */
`;

const Icon = styled.div`
  text-align: center;
  height: 40px;
  width: 40px;
  position: absolute;
  top: 10px;
  left: 10%;
  border: 1px solid ${config.colors.fontLight};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${config.colors.primary};
  }

  i {
    /* padding: 1em; */

    font-size: 2rem;

    cursor: pointer;
    transition: color 500ms;
    color: inherit;
  }
`;
const SidebarLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2em 0;
  transition: background-color 300ms, color 300ms;
  &:hover {
    background-color: rgba(84, 164, 255, 0.2);
    color: ${config.colors.primary};
    border-right: 2px solid ${config.colors.primary};
  }
  i {
    font-size: ${config.FontSizes.xl};
    margin-right: 0.5em;
    cursor: pointer;
  }
`;
const ItemsContainer = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-template-rows: repeat(4, max-content);
  text-align: start;
  margin-top: 60px;

  /* height: 500px; */
  gap: 2em;
`;

const Text = styled.p`
  display: inline-block;
  cursor: pointer;
  font-size: ${config.FontSizes.small};
  /* padding: 0.4em 0; */
  letter-spacing: 1px;
  color: ${config.colors.fontLight};
  text-transform: capitalize;
  ${(p) =>
    p.xl &&
    css`
      font-size: ${config.FontSizes.xl};
    `}
  ${(p) =>
    p.lg &&
    css`
      font-size: ${config.FontSizes.large};
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

const Sidebar = () => {
  let cReff = useRef(null);
  let iReff = useRef(null);
  let ic = useRef(null);
  const dispatch = useDispatch();
  const adminSidePanel = useSelector((s) => s.adminSidePanel);
  const { show } = adminSidePanel;

  useEffect(() => {
    const t1 = gsap.timeline({ paused: true });
    if (show) {
      gsap.to(ic, { left: "50%" });
      gsap.to(cReff, { width: "350px" });
      gsap.to(".adminSideIcon", { fontSize: config.FontSizes.xl });
      gsap.to(iReff, { padding: "0 3em" });
    } else {
      gsap.to(ic, { left: "5%" });
      gsap.to(iReff, { padding: "0 2em" });
      gsap.to(".adminSideIcon", { fontSize: "3rem", marginRight: "1em" });
      gsap.to(cReff, { width: "60px" });
    }
    t1.play();
  }, [show]);

  const ButtonHandler = () => {
    console.log("hello");
    if (show) {
      dispatch(CloseAdminSidePanel());
    } else {
      dispatch(OpenAdminSidePanel());
    }
  };
  return (
    <Container ref={(e) => (cReff = e)}>
      <InnerContainer ref={(e) => (iReff = e)}>
        <Icon ref={(e) => (ic = e)}>
          <i onClick={ButtonHandler} class='fas fa-times exit'></i>
        </Icon>
        <ItemsContainer>
          <SidebarLink to='/admin_dashboard'>
            <i className='fas fa-tools adminSideIcon'></i>
            <Text>dashboard</Text>
          </SidebarLink>

          <SidebarLink to='/users'>
            <i className='fas fa-user adminSideIcon'></i>
            <Text>users</Text>
          </SidebarLink>

          <SidebarLink to='/websites'>
            <i className='fas fa-archive adminSideIcon'></i>
            <Text>websites</Text>
          </SidebarLink>

          <SidebarLink to='/admin_forms'>
            <i className='fas fa-folder adminSideIcon'></i>
            <p>forms</p>
          </SidebarLink>
        </ItemsContainer>
      </InnerContainer>
    </Container>
  );
};

export default Sidebar;
