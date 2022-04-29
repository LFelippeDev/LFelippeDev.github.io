import styled from "styled-components";

interface IContainer {
  backgroundImage: string;
}

export const Container = styled.a<IContainer>`
  border-radius: 1rem;
  margin: 1rem;
  width: 10rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  align-items: flex-end;
  justify-content: flex-end;
  box-shadow: 0.2rem 0.2rem 0.5rem 0.2rem rgba(0, 0, 0, 0.3);

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    width: 90%;
    height: 15rem;
  }
`;

export const Footer = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;
