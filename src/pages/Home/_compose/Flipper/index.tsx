import { Container, Content, Image, Subtitle, Title } from './styles';

interface FlipperProps {
  image: string;
  title: string;
  time: string;
}

function Flipper({ image, title, time }: FlipperProps) {
  return (
    <Container>
      <div>
        <Image src={require(`../../../../assets/images/${image}.png`)} />
        <Content>
          <Title>{title}</Title>
          <Subtitle>{time}</Subtitle>
        </Content>
      </div>
    </Container>
  );
}

export default Flipper;
