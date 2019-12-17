import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const CardTitle = styled.h1`
  font-weight: 300;
  font-size: 1.6rem;
  margin-bottom: 3rem;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: #6050dc;
`;

const EvaluationCard = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding-top: 1rem;
  overflow: hidden;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
`;

const MiniHeading = styled.h5`
  color: #777;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
  margin: 1rem;
`;

const EvaluationList = styled.ul`
  & li {
    list-style: none;
    padding: 1rem 0;
    padding-left: 1rem;
    cursor: pointer;

    &:not(:last-child) {
      border-bottom: 1px solid #eee;
    }

    &:first-child {
      margin-top: 1rem;
    }

    &:hover {
      background-color: rgba(200, 200, 200, 0.3);
    }
  }
`;

const CodingChallenge = () => {
  return (
    <section>
      <Container>
        <Card>
          <CardTitle>Reposotory Requirement</CardTitle>
          <CardLink href="#!">web-coding-challenge</CardLink>
        </Card>
        <Card>
          <CardTitle>Reposotory Requirement</CardTitle>
          <CardLink href="#!">web-coding-challenge</CardLink>
        </Card>
        <Card>
          <CardTitle>Reposotory Requirement</CardTitle>
          <CardLink href="#!">web-coding-challenge</CardLink>
        </Card>
      </Container>
      <EvaluationCard>
        <MiniHeading>Our Evaluation</MiniHeading>
        <EvaluationList>
          <li>Respect for requirement</li>
          <li>Git best Practices</li>
          <li>Error handling</li>
          <li>Code readability</li>
          <li>Project Folder Structure</li>
          <li>Project Folder Structure</li>
        </EvaluationList>
      </EvaluationCard>
    </section>
  );
};

export default CodingChallenge;
