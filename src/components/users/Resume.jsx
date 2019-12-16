import React from "react";
import UserCard from "./UserCard.jsx";
import Main from "./Main.jsx";
import styled from "styled-components";

const Container = styled.div`
  border-top: 0.7rem solid #6050dc;
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const Resume = () => (
  <Container>
    <UserCard></UserCard>
    <Main></Main>
  </Container>
);

export default Resume;
