import React from "react";
import Header from "../../components/Header";
import Jumbotron from "../../components/Jumbotron";
import Works from "../../components/Works";

import { Container } from "./styles";

const Home = () => (
  <Container>
    <Header />
    <Jumbotron />
    <Works />
  </Container>
);

export default Home;
