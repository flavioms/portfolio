import React from "react";
import Header from "../../components/Header";
import Jumbotron from "../../components/Jumbotron";
import Works from "../../components/Works";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";

import { Container } from "./styles";

const Home = () => (
  <Container>
    <Header />
    <Jumbotron />
    <Works />
    <About />
    <Skills />
    <Contact />
  </Container>
);

export default Home;
