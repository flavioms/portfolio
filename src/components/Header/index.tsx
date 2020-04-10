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
        <a href="#" onClick={() => setCheck(false)}>
          Trabalhos{" "}
        </a>
        <a href="#" onClick={() => setCheck(false)}>
          Sobre
        </a>
        <a>
          <Avatar
            src="https://avatars1.githubusercontent.com/u/11588405?v=4"
            alt=""
          />
        </a>
        <a href="#" onClick={() => setCheck(false)}>
          Links
        </a>
        <a href="#" onClick={() => setCheck(false)}>
          Contato
        </a>
      </Nav>
    </Container>
  );
};

export default Header;