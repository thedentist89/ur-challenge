import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 6.5rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

const NavBar = () => {
  return (
    <Container>
      <nav></nav>
    </Container>
  );
};

export default NavBar;
