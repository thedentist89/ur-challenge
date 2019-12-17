import React from "react";
import styled from "styled-components";
import avatar from "../../avatar.jpg";
import NavBar from "../layout/Navbar.jsx";

const Card = styled.div`
  width: 100%;
  border-radius: 1rem;
  margin: 3rem auto;
  position: relative;
`;

const Wrapper = styled.div`
  width: 25%;
  margin: 2rem 2rem;
`;

const CardImage = styled.div`
  position: absolute;
  right: 3rem;
  top: 0;
  border-radius: 200px;
  overflow: hidden;
`;

const CardInfo = styled.div`
  margin-top: 3rem;
  margin-left: 1rem;
`;

const CardHeading = styled.h1`
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const CardSubHeading = styled.h2`
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const HeadingTertiary = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const TextMuted = styled.h2`
  color: #999;
  font-weight: 400;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
`;

const Description = styled.p`
  font-size: 1.3rem;
  margin-bottom: 3rem;
`;

const Button = styled.a`
  &:link,
  &:active {
    text-decoration: none;
    color: #6050dc;
    border-radius: 0.2rem;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    background-color: #fff;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StackUL = styled.ul`
  & li {
    list-style: none;
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.3rem 1rem;
    background-color: rgba(0, 0, 0, 0.1);
    color: #6050dc;
    border-radius: 3px;
  }
`;

const PersonCard = () => (
  <Wrapper>
    <NavBar></NavBar>
    <Card>
      <CardImage>
        <img src={avatar} alt="profile" width="55" height="55" />
      </CardImage>
      <CardInfo>
        <CardHeading>Mourad</CardHeading>
        <CardHeading>Aouinat</CardHeading>
        <TextMuted>Front-end web Developer</TextMuted>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          deleniti placeat illo distinctio dignissimos officiis dolorem corrupti
          vero laudantium! Dignissimos recusandae.
        </Description>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Button href="#!">Resume.pdf</Button>
        </div>
        <CardSubHeading>Tech Stack</CardSubHeading>
        <HeadingTertiary>Experienced in</HeadingTertiary>
        <StackUL>
          <li>bach</li>
          <li>bach</li>
          <li>bach</li>
        </StackUL>
        <HeadingTertiary>Proficient in</HeadingTertiary>
        <StackUL>
          <li>bach</li>
          <li>bach</li>
          <li>bach</li>
        </StackUL>
        <HeadingTertiary>Proficient in</HeadingTertiary>
        <StackUL>
          <li>bach</li>
          <li>bach</li>
          <li>bach</li>
        </StackUL>
        <CardSubHeading>Languages</CardSubHeading>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          deleniti placeat.
        </Description>
      </CardInfo>
    </Card>
  </Wrapper>
);

export default PersonCard;
