import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  box-sizing: content-box;

  margin: 10vh auto;
`;

export const Title = styled.h1`
  font-size: 100%;
  color: ${(props) => props.theme.colors.grayLight};
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 5px;

  @media screen and (max-width: 767px) {
    font-size: 60%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Card = styled.div`
  position: relative;
  cursor: pointer;
  width: 250px;
  height: 250px;
  margin: 2em;

  .front,
  .back {
    width: 100%;
    height: 100%;
    overflow: hidden;
    backface-visibility: hidden;
    position: absolute;
    transition: transform 0.6s linear;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .front {
    transform: perspective(400px) rotateY(0deg);

    & > img {
      position: relative;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .back {
    background: ${(props) => lighten(0.3, props.theme.colors.grayDark)};
    transform: perspective(400px) rotateY(180deg);
  }

  .back-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    & > h2 {
      color: ${(props) => props.theme.colors.blue};
    }
  }

  &:hover > .front {
    transform: perspective(400px) rotateY(-180deg);
  }

  &:hover > .back {
    transform: perspective(400px) rotateY(0deg);
  }
`;
