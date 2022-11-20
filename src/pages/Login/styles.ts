import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .left-column {
    background: #29d799;

    h1 {
      color: #fff;
      text-align: center;
    }
  }

  .right-column {
    background-color: #0c0636;
  }

  h3 {
    color: #fff;
    text-align: center;
    margin-bottom: 3rem;
  }

  @media only screen and (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
`;

export const Color = styled.div`
  color: #0c0636;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    width: 100%;
  }

  input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #29d799;
    margin-bottom: 3rem;
    padding: 0 1rem;
    width: 55%;
  }

  a {
    width: 50%;
    background-color: transparent;
    border-radius: 12px;
    border: 2px solid #29d799;
    border-bottom: 4px solid #29d799;
    color: #fff;
    padding: 0.8rem 2rem;
    text-align: center;
    text-decoration: none;
  }

  button {
    margin-top: 2rem;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    color: #FFF;
    font-weight: 700;
    font-size: 14px;
  }
`;
