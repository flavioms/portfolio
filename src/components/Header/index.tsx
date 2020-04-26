import React, { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { ThemeContext } from "styled-components";
import { Container, Nav, Avatar } from "./styles";

const Header = () => {
  const [check, setCheck] = useState(false);
  const themeContext = useContext(ThemeContext);
  return (
    <Container>
      <Avatar
        src="https://avatars1.githubusercontent.com/u/11588405?v=4"
        alt=""
      />
      <label htmlFor="menu">
        <FaBars size={20} color={themeContext.colors.blue} />
      </label>
      <input
        type="checkbox"
        id="menu"
        checked={check}
        onChange={() => setCheck(!check)}
      />

      <Nav>
        <a href="#works" onClick={() => setCheck(false)}>
          Trabalhos
        </a>
        <a href="#about" onClick={() => setCheck(false)}>
          Sobre
        </a>
        <a>
          <Avatar
            src="https://avatars1.githubusercontent.com/u/11588405?v=4"
            alt=""
          />
        </a>
        <a href="#skills" onClick={() => setCheck(false)}>
          Skills
        </a>
        <a href="#contact" onClick={() => setCheck(false)}>
          Contato
        </a>
      </Nav>
    </Container>
  );
};

export default Header;
