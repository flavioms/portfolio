import styled from "styled-components";
import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 5vh auto;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2em 0;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;
  min-width: 8em;
  flex: 1;

  & > p {
    margin: 1em 0;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
`;

export const IconReact = styled(FaReact)`
  color: #5cd3f3;
  font-size: 4em;
`;

export const IconNode = styled(FaNodeJs)`
  color: #8cc03d;
  font-size: 4em;
`;

export const IconJs = styled(FaJs)`
  color: #efd81d;
  font-size: 4em;
`;

export const IconTs = styled.img`
  width: 4em;
`;

export const IconCss = styled(FaCss3Alt)`
  color: #254bdd;
  font-size: 4em;
`;

export const IconHtml = styled(FaHtml5)`
  color: #dd4b25;
  font-size: 4em;
`;
