import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  width: 100%;
  margin-bottom: 2em;
`;
export const Card = styled.div`
  width: calc(90% / 2);
`;
export const CardTitle = styled.h2`
  margin: 1em 0;
  font-size: 28px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
`;
export const CardBody = styled.p`
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
`;
