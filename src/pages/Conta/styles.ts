import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #29d799;
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

export const ColumnsContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 6rem;
`;

export const RightColumn = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Employee = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  .nome {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const Image = styled.img`
  width: 10rem;
`;

export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Card = styled.div`
  width: 15rem;
`;

export const ImageCard = styled.img`
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  button {
    width: 18rem;
    height: 4rem;
    border: none;
    background-color: #d39d0c;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 16px;
    cursor: pointer;
  }
`;

export const ButtonIcon = styled.img`
  width: 2rem;
`;

export const LeftColumn = styled.div`
  width: 45%;
  border-left: 2px solid #BAC8E0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding-left: 2rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 2rem;
`;

export const RowIcon = styled.img`
  width: 3rem;
`;

export const TextContainer = styled.div`
  .title {
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StarIcon = styled.img`
  width: 2.5rem;
`;
