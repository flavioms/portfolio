import React from "react";
import { differenceInYears } from "date-fns";

import { Container, Title, Wrapper, Card, CardTitle, CardBody } from "./styles";

const About = () => {
  const age = differenceInYears(new Date(), new Date("1994-01-26"));
  return (
    <Container>
      <Title id="about">Sobre</Title>
      <Wrapper>
        <Card>
          <CardTitle>Olá, Meu nome é Flávio</CardTitle>
          <CardBody>
            Tenho {age} anos, moro no interior do Rio de Janeiro e estou
            iniciando na área de desenvolvimento web, mas tenho certeza de que
            com foco, a capacitação e a motivação que possuo logo estarei
            conquistando meus objetivos profissionais e pessoais.
          </CardBody>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default About;
