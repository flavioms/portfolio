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
            Tenho {age} anos, moro no interior do Rio de Janeiro e sou
            desenvolvedor full-stack, estou em inicio de carreira mas estou
            sempre buscando me atualizar com as novidades do mercado e aplicando
            meus conhecimentos em projetos pessoais ou sociais. Apesar de ser
            full-stack tenho maior afinidade com front-end, e possuo
            conhecimentos sólidos em React, React Native, Redux, Context API,
            Hooks, Node, Express, Adonis, NestJS, Hapi, Typescript, TDD, DDD
            (Clean Architecture), Jest, Mocha, Enzyme.
          </CardBody>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default About;
