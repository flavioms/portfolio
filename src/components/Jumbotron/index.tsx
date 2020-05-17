import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <h1>
        Motivação é o primeiro passo <br />
        para o <strong>Sucesso</strong>
      </h1>

      <nav>
        <a href="">
          <FaWhatsapp size={20} />
        </a>
        <a href="">
          <FaLinkedin size={20} />
        </a>
        <a href="">
          <FaGithub size={20} />
        </a>
      </nav>

      <p>Flávio Martins - Full Stack Developer</p>
    </Container>
  );
};

export default Home;
