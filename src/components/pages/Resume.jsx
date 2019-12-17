import React from "react";
import PersonCard from "../sections/PersonCard.jsx";
import Main from "../sections/Main.jsx";
import styled from "styled-components";

const Container = styled.div`
  border-top: 0.7rem solid #6050dc;
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const Resume = () => (
  <Container>
    <PersonCard></PersonCard>
    <Main></Main>
  </Container>
);

export default Resume;
