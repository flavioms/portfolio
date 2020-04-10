import styled from "styled-components";

export const Container = styled.section`
  margin: 10vh auto;
  font-size: 200%;
  text-align: center;

  & > h1 {
    text-align: center;
    white-space: nowrap;
  }

  & strong {
    color: ${(props) => props.theme.colors.blue};
  }

  & > nav {
    margin: 3vh auto 2vh auto;

    & > a {
      font-size: 1em;
      color: ${(props) => props.theme.colors.blue};
      padding: 0 1em;
    }
  }

  & > p {
    font-size: 0.8em;
    font-weight: 200;
    color: ${(props) => props.theme.colors.grayLight};
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: -1;
      width: 20%;
      height: 1px;
      background: ${(props) => props.theme.colors.grayLight};
    }

    &::before {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: -1;
      width: 20%;
      height: 1px;
      background: ${(props) => props.theme.colors.grayLight};
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 100%;

    & > nav > a {
      font-size: 150%;
    }
  }
`;
