import React from "react";
import iconTs from "../../assets/iconTs.svg";
import {
  Container,
  Title,
  Wrapper,
  Skill,
  IconReact,
  IconCss,
  IconHtml,
  IconJs,
  IconNode,
  IconTs,
} from "./styles";

const Skills = () => {
  return (
    <Container>
      <Title>Skills</Title>

      <Wrapper>
        <Skill>
          <IconReact />
          <p>ReactJS & React Native</p>
        </Skill>
        <Skill>
          <IconNode />
          <p>NodeJS</p>
        </Skill>
        <Skill>
          <IconJs />
          <p>Javascript ES6+</p>
        </Skill>
        <Skill>
          <IconTs src={iconTs} />
          <p>Typescript</p>
        </Skill>
        <Skill>
          <IconHtml />
          <p>Html5 </p>
        </Skill>
        <Skill>
          <IconCss />
          <p>CSS3</p>
        </Skill>
      </Wrapper>
    </Container>
  );
};

export default Skills;
