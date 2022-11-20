import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  display: flex;

  div {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  padding: 1rem;
  max-height: 7rem;
  position: relative;
  z-index: 5000;
  margin-top: -13rem;

  @media only screen and (min-width: 1025px) {
    background-color: rgba(186, 200, 224, 0.63);
    border-radius: 0;
  }
`;

export const Title = styled.h4`
  margin: 0;
  color: #000;
`;

export const Subtitle = styled.span`
  color: #4b4c4e;
  margin-bottom: 0;
`;
