import React from "react";
import WorkExperience from "./WorkExperience.jsx";
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

const MainHeading = styled.h1`
  position: relative;
  font-size: 2.5rem;
  margin-bottom: 2rem;

  &::before {
    content: "";
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 5px;
    background-color: #6050dc;
    position: absolute;
    left: -2rem;
    top: 1.2rem;
  }
  &::after {
    content: "";
    height: 1px;
    width: 60%;
    background-color: #6050dc;
    position: absolute;
    right: 0rem;
    top: 1.8rem;
  }
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
      <MainHeading>Work experience</MainHeading>
      <WorkExperience></WorkExperience>
      <MainHeading>Education</MainHeading>
    </Container>
  );
};

export default Main;
