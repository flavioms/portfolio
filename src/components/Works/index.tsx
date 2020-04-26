import React from "react";
import { Container, Title, Wrapper, Card } from "./styles";
import bairroProject from "../../assets/bairro.gif";
import neumorphismProject from "../../assets/neumorphism.gif";
import spotifyProject from "../../assets/spotify.gif";

const Works = () => {
  return (
    <Container>
      <Title id="works">Trabalhos</Title>
      <Wrapper>
        <Card>
          <div className="front">
            <img src={bairroProject} alt="" />
          </div>
          <div className="back">
            <a
              className="back-content"
              href="https://www.bairroemfocoapp.com.br/"
              target="_blank"
            >
              <h2>Bairro em Foco</h2>
              <span>
                Participação no projeto feito com React e cujo a finalidade é
                divulgar comerciantes locais de serviços/produtos essênciais no
                período de quarentena do covid19.
              </span>
            </a>
          </div>
        </Card>
        <Card>
          <div className="front">
            <img src={neumorphismProject} alt="" />
          </div>
          <div className="back">
            <a
              className="back-content"
              href="https://github.com/flavioms/neumorphism-example"
              target="_blank"
            >
              <h2>UX Neumorphism</h2>
              <span>
                A página foi feita com o objetivo de testar a nova tendência de
                layout. Também foi aplicado a técnica de dark mode, salvando a
                escolha do usuario no localstorage através de um hook
                customizado.
              </span>
            </a>
          </div>
        </Card>
        <Card>
          <div className="front">
            <img src={spotifyProject} alt="" />
          </div>
          <div className="back">
            <a
              className="back-content"
              href="https://github.com/flavioms/Player-Spotify"
              target="_blank"
            >
              <h2>Player Spotify</h2>
              <span>
                Aplicativo feito com React para buscar e reproduzir músicas
                utilizando a API do spotify mas com uma interface mais objetiva.
                Todos os componentes incluindo os de controle foram criados
                manualmente.
              </span>
            </a>
          </div>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Works;
