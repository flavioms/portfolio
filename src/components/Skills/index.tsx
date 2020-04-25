import React from "react";

import {
  Container,
  Title,
  Wrapper,
  IconReact,
  IconCss,
  IconHtml,
  IconJs,
  IconNode,
} from "./styles";

const Skills = () => {
  return (
    <Container>
      <Title>Skills</Title>

      <Wrapper>
        <IconReact />
        <IconNode />
        <IconJs />
        <IconHtml />
        <IconCss />
      </Wrapper>
    </Container>
  );
};

export default Skills;
