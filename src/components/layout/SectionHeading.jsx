import React from "react";
import styled from "styled-components";

const MainHeading = styled.h1`
  font-size: 2.5rem;
  margin-right: 1.5rem;
  font-weight: 500;
`;

const MainHeadingWrapper = styled.div`
  padding: 0.1rem;
  display: flex;
  justify-content: left;
  margin-top: 3rem;
`;

const Dot = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 1rem;
  background-color: #6050dc;
  margin: 1.3rem 1rem;
`;

const Line = styled.div`
  height: 1px;
  width: 50%;
  background-color: #6050dc;
  margin: 1.6rem 0;
`;

const SectionHeading = ({ title }) => (
  <MainHeadingWrapper>
    <Dot></Dot>
    <MainHeading>{title}</MainHeading>
    <Line></Line>
  </MainHeadingWrapper>
);

export default SectionHeading;
