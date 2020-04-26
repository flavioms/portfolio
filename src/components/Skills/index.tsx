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
  IconMongodb,
  IconMsqlServer,
  IconMysql,
  IconRedis,
} from "./styles";

const Skills = () => {
  return (
    <Container>
      <Title id="skills">Skills</Title>

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
        <Skill>
          <IconMsqlServer />
          <p>MSSQL</p>
        </Skill>
        <Skill>
          <IconMysql />
          <p>MySQL</p>
        </Skill>
        <Skill>
          <IconMongodb />
          <p>MongoDB</p>
        </Skill>
        <Skill>
          <IconRedis />
          <p>Redis</p>
        </Skill>
      </Wrapper>
    </Container>
  );
};

export default Skills;
