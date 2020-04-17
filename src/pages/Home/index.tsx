import React from "react";
import Header from "../../components/Header";
import Jumbotron from "../../components/Jumbotron";
import Works from "../../components/Works";
import About from "../../components/About";

import { Container } from "./styles";

const Home = () => (
  <Container>
    <Header />
    <Jumbotron />
    <Works />
    <About />
  </Container>
);

export default Home;
