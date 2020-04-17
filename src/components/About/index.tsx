import React from "react";

import { Container, Title, Wrapper, Card, CardTitle, CardBody } from "./styles";

const About = () => {
  return (
    <Container>
      <Title>Sobre</Title>
      <Wrapper>
        <Card>
          <CardTitle>Lorem ipsum</CardTitle>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            quis rutrum ligula, eu luctus nisl. Aliquam augue sem, vehicula vel
            felis at, condimentum fermentum dui.
          </CardBody>
        </Card>
        <Card>
          <CardTitle>Lorem ipsum</CardTitle>
          <CardBody>
            Donec porttitor non sapien vitae finibus. Pellentesque ipsum orci,
            scelerisque malesuada pretium nec, tristique a orci. Mauris
            vestibulum massa ac metus pellentesque, eget malesuada ligula
            commodo.
          </CardBody>
        </Card>
        <Card>
          <CardTitle>Lorem ipsum</CardTitle>
          <CardBody>
            Donec sodales, turpis id lacinia iaculis, magna felis commodo neque,
            et condimentum tellus risus sed tortor. Integer rutrum odio vitae
            mauris viverra imperdiet.
          </CardBody>
        </Card>
        <Card>
          <CardTitle>Lorem ipsum</CardTitle>
          <CardBody>
            Praesent diam turpis, lacinia ac aliquet a, porttitor at erat. Etiam
            egestas ac libero vitae commodo. Phasellus turpis urna, vehicula id
            dolor id, sodales ornare erat.{" "}
          </CardBody>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default About;
