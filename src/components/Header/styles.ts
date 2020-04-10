import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;

  & > label,
  & > img {
    display: none;
  }

  & > input[type="checkbox"] {
    display: none;
  }

  @media screen and (max-width: 768px) {
    & > label {
      position: absolute;
      display: initial;
      top: 4%;
      left: 4%;
      z-index: 2;
    }

    & > img {
      position: absolute;
      display: initial;
      left: 0;
      right: 0;
      margin: auto;
    }

    & > input[type="checkbox"]:checked + nav {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 1;
      background: rgba(255, 255, 255, 0.9);
      width: 100vw;
      height: 100vh;

      & > a {
        padding: 1em 0;
      }

      & > a:nth-child(3) {
        display: none;
      }
    }
  }
`;
export const Nav = styled.nav`
  display: none;
  & > a {
    text-align: center;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    & > a {
      flex: 1;

      &:nth-child(3) {
        flex: 2;
      }
    }
  }
`;

export const Avatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 25px;
`;
