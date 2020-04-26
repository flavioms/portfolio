import React from "react";

import { Container, Title, Wrapper, Card } from "./styles";

const Works = () => {
  return (
    <Container>
      <Title>Trabalhos</Title>
      <Wrapper>
        <Card>
          <div className="front">
            <img
              src="https://i.pinimg.com/564x/49/4f/65/494f65b499a8a696e740f50ac7663e17.jpg"
              alt=""
            />
          </div>
          <div className="back">
            <div className="back-content">
              <h2>Projeto</h2>
              <span>Descrição do projeto</span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="front">
            <img
              src="https://i.pinimg.com/564x/cc/28/a8/cc28a8887519a8d3bd5f4857c0e5c318.jpg"
              alt=""
            />
          </div>
          <div className="back">
            <div className="back-content">
              <h2>Projeto</h2>
              <span>Descrição do projeto</span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="front">
            <img
              src="https://i.pinimg.com/564x/7d/9b/42/7d9b42b086e6483a2c99bcff35385fe6.jpg"
              alt=""
            />
          </div>
          <div className="back">
            <div className="back-content">
              <h2>Projeto</h2>
              <span>TEste de projeto</span>
            </div>
          </div>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Works;
