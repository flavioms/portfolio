import styled from "styled-components";
import { Form } from "formik";

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

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  width: 80vw;
  margin-top: 2em;

  span {
    color: red;
    font-size: 0.8em;
    margin-bottom: 1em;
  }

  input,
  textarea {
    flex: 1;
    margin-bottom: 1em;
    padding: 1em;
    border: none;
    border-radius: 8px;

    &:focus,
    &:valid {
      background: #ffffff;
      box-shadow: 4px 4px 8px #d9d9d9, -4px -4px 8px #ffffff;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: none;
      -webkit-text-fill-color: #000;
      box-shadow: 4px 4px 8px #d9d9d9, -4px -4px 8px #ffffff;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  button {
    max-width: 20%;
    padding: 1em;
    border: none;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 800;
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow: 4px 4px 8px #d9d9d9, -4px -4px 8px #ffffff;

    &:active {
      color: ${(props) => props.theme.colors.grayDark};
      background: #ffffff;
      box-shadow: inset 4px 4px 8px #d9d9d9, inset -4px -4px 8px #ffffff;
    }

    @media screen and (max-width: 767px) {
      max-width: 30%;
      font-size: 70%;
    }
  }
`;
