import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
`;

export const Nav = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: #0c0636;
  color: #29d799;
  font-weight: 700;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: #29d799;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;

    li {
      margin-right: 2rem;
      display: flex;
      align-items: top;
      align-content: top;
    }
  }
`;

export const Icon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

export const Cards = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #29d799;
  padding: 1rem 2rem;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;

  div {
    display: flex;
    flex-direction: row;
  }

  .first-text {
    font-size: 1.5rem;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input {
    border: none;
    border-radius: 10px;
    padding: 0 1rem;
    width: 15rem;

    ::placeholder {
      color: #29d799;
      font-size: 1rem;
      font-weight: 700;
    }
  }
`;

export const Color = styled.h1`
  color: #102948;
  font-size: 1.5rem;
`;

export const CardsRow = styled.h1`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 2rem;

  @media only screen and (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const FooterContainer = styled.div`
  background-color: #0c0636;
  height: 100%;
  box-sizing: border-box;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    color: #fff;
    font-size: 1.2rem;
    overflow: hidden;
    height: 2rem;
  }

  p {
    color: rgba(255, 255, 255, 0.65);
    font-size: 0.9rem;
  }
`;

export const ProfilesContainer = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media only screen and (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const FlipperContainer = styled.div`
  width: 100%;
  min-height: 15rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-top: 3rem;

  @media only screen and (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const ExternalButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: #f8cd5e;
  border-radius: 16px;
  padding: 0.5rem 1rem;
  gap: 1rem;
  width: 19rem;
  cursor: pointer;
  z-index: 2000;

  .que-tal {
    color: #000;
    font-size: 0.8rem;
    font-weight: 300;
  }

  img {
    width: 3.5rem;
  }
`;
