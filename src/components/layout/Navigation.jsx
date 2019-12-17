import React from "react";
import styled, { css } from "styled-components";

const Title = styled.h3`
  text-transform: uppercase;
  color: #777;
  margin-bottom: 1.6rem;
`;

const Container = styled.div`
  margin-top: 8rem;
  position: relative;
`;

const Nav = styled.nav`
  position: fixed;
`;

const NavItem = styled.li`
  padding-left: 3rem;
  margin-bottom: 0.8rem;

  ${props =>
    props.main &&
    css`
      color: #6050dc;
      font-size: 1.6rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      list-style: none;
      padding-left: 0;
    `}
`;

const Navigation = () => (
  <Container>
    <Nav>
      <Title>navigation</Title>
      <ul>
        <NavItem main>general information</NavItem>
        <NavItem>education</NavItem>
        <NavItem main>remote assessement</NavItem>
        <NavItem>condidate assessement</NavItem>
        <NavItem>team evaluation / review</NavItem>
        <NavItem>coding challenge</NavItem>
        <NavItem>team feedback</NavItem>
        <NavItem main>bootcamp assessment</NavItem>
        <NavItem>courses</NavItem>
        <NavItem>worked on</NavItem>
      </ul>
    </Nav>
  </Container>
);

export default Navigation;
