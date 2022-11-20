import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0c0636;
  overflow-y: auto;
`;

export const Content = styled.div`
  height: 100vh;

  h1 {
    margin-top: 5rem;
    margin-left: 4rem;
    color: #9fd86b;
  }

  p {
    color: #fff;
    margin-left: 4rem;
  }
`;

export const BallsContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;

  button {
    font-weight: 700;
    border: none;
    cursor: pointer;
  }

  .familia {
    height: 10rem;
    width: 10rem;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 2rem;
    margin-top: 1rem;
  }

  .produtos {
    height: 12rem;
    width: 12rem;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 2rem;
    margin-top: 1rem;
  }

  .saude {
    height: 8rem;
    width: 8rem;
    background-color: #29d799;
    color: #fff;
    border-radius: 50%;
    margin-left: 1rem;
    margin-top: 0rem;
  }

  .c {
    height: 10rem;
    width: 10rem;
    background-image: linear-gradient(to right, #accbee, #fff);
    border-radius: 50%;
    margin-left: 2rem;
    margin-top: 5rem;
  }

  .agilidade {
    height: 9rem;
    width: 9rem;
    background-image: linear-gradient(to right, #accbee, #29d799);
    color: #fff;
    border-radius: 50%;
    margin-left: 1rem;
    margin-top: 0rem;
  }

  .flor {
    height: 7rem;
    width: 7rem;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 1rem;
    margin-top: 1rem;
  }

  .qa {
    height: 7rem;
    width: 7rem;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 5rem;
    margin-top: 5rem;
  }

  .comportamento {
    height: 12rem;
    width: 12rem;
    background-image: linear-gradient(to right, #accbee, #29d799);
    color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    margin-top: 0rem;
  }

  .design {
    height: 18rem;
    width: 18rem;
    background-image: linear-gradient(to right, #accbee, #29d799);
    color: #fff;
    border-radius: 50%;
    margin-left: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  .bem-estar {
    height: 12rem;
    width: 12rem;
    background-image: linear-gradient(to right, #9fd86b, #29d799);
    color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    margin-top: 0rem;
  }

  .reciclagem {
    height: 18rem;
    width: 18rem;
    background-image: linear-gradient(to right, #29d799, #accbee);
    color: #fff;
    border-radius: 50%;
    margin-left: 2rem;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  .devops {
    height: 15rem;
    width: 15rem;
    background-image: linear-gradient(to right, #accbee, #fff);
    color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  .apps {
    height: 5rem;
    width: 5rem;
    background-image: linear-gradient(to right, #accbee, #fff);
    border-radius: 50%;
    margin-left: 2rem;
    margin-top: 5rem;
  }

  .esportes {
    height: 13rem;
    width: 13rem;
    background-image: linear-gradient(to right, #9fd86b, #29d799);
    color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    margin-top: 0rem;
  }

  .jardinagem {
    height: 10rem;
    width: 10rem;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 2rem;
    margin-top: 1rem;
  }

  .educacao {
    height: 10rem;
    width: 10rem;
    background-color: #29d799;
    color: #fff;
    border-radius: 50%;
    margin-left: 1rem;
    margin-top: 0rem;
  }

  .tecnologia {
    height: 12rem;
    width: 12rem;
    background-image: linear-gradient(to right, #accbee, #fff);
    border-radius: 50%;
    margin-left: 2rem;
  }

  .pets {
    height: 7rem;
    width: 7rem;
    background-image: linear-gradient(to right, #accbee, #29d799);
    color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    margin-top: 2rem;
  }

  .receitas {
    height: 14rem;
    width: 14rem;
    background-image: linear-gradient(to right, #9fd86b, #29d799);
    color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    margin-top: 2rem;
  }

  .viagem {
    height: 15rem;
    width: 15rem;
    background-image: linear-gradient(to right, #accbee, #fff);
    border-radius: 50%;
    margin-left: 2rem;
    margin-top: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 5rem;
  position: relative;
  display: flex;
  justify-content: flex-end;
  bottom: 20rem;

  a {
    position: absolute;
    bottom: 0;
    background-color: #9fd86b;
    border: 3px solid #0c0636;
    color: #0c0636;
    border-radius: 30px;
    padding: 1rem 5rem;
    text-decoration: none;
    font-weight: 700;
    margin-right: 2rem;
  }
`;
