import {
  Container,
  DescriptionContainer,
  Image,
  TextContainer,
  Title,
} from './styles';

interface ProfileProps {
  profission: string;
  name: string;
  time: string;
  photo: string;
}

function Profile({ profission, name, time, photo }: ProfileProps) {
  return (
    <Container>
      <Title>{profission}</Title>
      <TextContainer>
        <Image src={require(`../../../../assets/images/${photo}.png`)} />
        <DescriptionContainer>
          <Title>{name}</Title>
          <Title>{time}</Title>
        </DescriptionContainer>
      </TextContainer>
    </Container>
  );
}

export default Profile;
