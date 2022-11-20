import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #0c0636;
  overflow-y: visible;
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
  font-weight: 400;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Rate = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 8px;
  min-width: 4rem;
  max-height: 2rem;
  align-items: center;
  justify-content: space-around;
  align-content: center;
`;

export const Icon = styled.img`
  width: 1rem;
`;

export const Text = styled.p`
  font-size: 0.6rem;
`;

export const Bookmark = styled.img`
  width: 1rem;
`;

export const Category = styled.p`
  font-size: 0.7rem;
  color: #9fd86b;
`;

export const Title = styled.p`
  font-size: 1rem;
  color: #fff;
`;

export const Videos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-content: center;
`;

export const Play = styled.img`
  width: 1rem;
  margin-right: 0.3rem;
`;

export const Number = styled.p`
  font-size: 0.7rem;
  color: #9fd86b;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #9fd86b;
`;
