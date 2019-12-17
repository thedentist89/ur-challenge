import React from "react";
import WorkExperience from "./WorkExperience.jsx";
import SectionHeading from '../layout/SectionHeading.jsx';
import styled from "styled-components";

const Heading = styled.h1`
  text-transform: uppercase;
  color: #6050dc;
  font-size: 1.5rem;
  text-align: left;
  font-weight: 700;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  width: 40%;
  margin-top: 3rem;
  margin-left: 3rem;
`;

const Main = () => {
  return (
    <Container>
      <Heading>General information</Heading>
      <SectionHeading title="Work information"></SectionHeading>
      <WorkExperience></WorkExperience>
      <SectionHeading title="Education"></SectionHeading>
    </Container>
  );
};

export default Main;
