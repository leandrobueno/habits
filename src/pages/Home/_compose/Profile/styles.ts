import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 10px;

  @media only screen and (min-width: 1025px) {
    width: calc(100% / 3.2);
  }
`;

export const Title = styled.h3`
  font-size: 0.9rem;
  margin: 0.2rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
