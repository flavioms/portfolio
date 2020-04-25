import React from "react";
import Header from "../../components/Header";
import Jumbotron from "../../components/Jumbotron";
import Works from "../../components/Works";
import About from "../../components/About";
import Skills from "../../components/Skills";

import { Container } from "./styles";

const Home = () => (
  <Container>
    <Header />
    <Jumbotron />
    <Works />
    <About />
    <Skills />
  </Container>
);

export default Home;
