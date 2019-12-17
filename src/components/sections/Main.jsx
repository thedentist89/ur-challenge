import React from "react";
import WorkExperience from "./WorkExperience.jsx";
import SectionHeading from "../layout/SectionHeading.jsx";
import styled from "styled-components";
import CodingChallenge from "./CodingChallenge.jsx";
import TeamFeedback from "./TeamFeedback.jsx";

const Heading = styled.h1`
  text-transform: uppercase;
  color: #6050dc;
  font-size: 1.5rem;
  text-align: left;
  font-weight: 500;
  letter-spacing: 0.1rem;
`;

const HeadingDescription = styled.h3`
  color: #888;
  font-weight: 300;
  margin-top: 1rem;
`;

const Container = styled.div`
  width: 40%;
  margin-top: 3rem;
  margin-left: 3rem;
  margin-right: 4rem;
`;

const Main = () => {
  return (
    <Container>
      <Heading>General information</Heading>
      <SectionHeading title="Work information"></SectionHeading>
      <WorkExperience></WorkExperience>
      <SectionHeading title="Education"></SectionHeading>
      <Heading>united remote assessement</Heading>
      <HeadingDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        quaerat sunt autem illum maxime repellendus optio
      </HeadingDescription>
      <SectionHeading title="Coding Challenge"></SectionHeading>
      <HeadingDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        quaerat sunt autem illum maxime repellendus optio
      </HeadingDescription>
      <CodingChallenge></CodingChallenge>
      <SectionHeading title="Team Feedback"></SectionHeading>
      <TeamFeedback></TeamFeedback>
    </Container>
  );
};

export default Main;
