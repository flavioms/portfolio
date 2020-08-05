import React, { useState } from "react";
import { Container, Title, Wrapper, Card } from "./styles";
import bairroProject from "../../assets/bairro.gif";
import neumorphismProject from "../../assets/neumorphism.gif";
import spotifyProject from "../../assets/spotify.gif";
import mealProject from "../../assets/meal.png";
import movieCenterProject from "../../assets/movieCenter.png";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}
const Works = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      image: bairroProject,
      title: "Bairro em Foco",
      description: `Participação no projeto feito com React e cujo a finalidade é
      divulgar comerciantes locais de serviços/produtos essênciais no
      período de quarentena do covid19.`,
      link: "https://www.bairroemfocoapp.com.br/",
    },
    {
      id: 2,
      image: neumorphismProject,
      title: "UX Neumorphism",
      description: `A página foi feita com o objetivo de testar a nova tendência de
      layout. Também foi aplicado a técnica de dark mode, salvando a
      escolha do usuario no localstorage através de um hook
      customizado.`,
      link: "",
    },
    {
      id: 3,
      image: spotifyProject,
      title: "Player Spotify",
      description: `Aplicativo feito com React para buscar e reproduzir músicas
      utilizando a API do spotify mas com uma interface mais objetiva.
      Todos os componentes incluindo os de controle foram criados
      manualmente.`,
      link: "",
    },
    {
      id: 4,
      image: mealProject,
      title: "Random Meal",
      description: `Aplicativo feito com React para gerar receitas aleatórias e salvar em uma lista de favoritos`,
      link: "https://flavioms-random-meal.netlify.app/",
    },
    {
      id: 5,
      image: movieCenterProject,
      title: "Movie App",
      description: `Aplicativo feito com React onde é possivel fazer login com redes sociais, buscar por filmes e adicionar comentários`,
      link: "https://moviecenter-416af.web.app/signin",
    },
  ]);

  return (
    <Container>
      <Title id="works">Trabalhos</Title>
      <Wrapper>
        {projects.map((item: Project, index: Number) => (
          <Card key={index.toString()}>
            <div className="front">
              <img src={item.image} alt="" />
            </div>
            <div className="back">
              <a className="back-content" href={item.link} target="_blank">
                <h2>{item.title}</h2>
                <span>{item.description}</span>
              </a>
            </div>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Works;
