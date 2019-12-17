import React from "react";
import styled from "styled-components";
import urPeople from "../../ur-people.svg";
import dots from "../../dots.svg";

const Container = styled.div`
  width: 90%;
  height: 6.5rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  float: right;
`;

const NavBar = () => {
  return (
    <Container>
      <nav>
        <a href="#!">
          <img src={urPeople} alt="ur people" />
        </a>
        <Button>
          <img src={dots} alt="ur people" />
        </Button>
      </nav>
    </Container>
  );
};

export default NavBar;
