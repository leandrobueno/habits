import {
  Container,
  Row,
  TextContainer,
  Number,
  Image,
  Rate,
  Icon,
  Text,
  Category,
  Title,
  Videos,
  Play,
  Subtitle,
  Bookmark,
} from './styles';
import Star from '../../../../assets/icons/star.svg';
import Player from '../../../../assets/icons/play.svg';
import Bookmarker from '../../../../assets/icons/bookmark.svg';

interface CardProps {
  image: string;
  rate: string;
  category: string;
  title: string;
  videos: string;
  subtitle: string;
}

function Card({ image, rate, category, title, videos, subtitle }: CardProps) {
  return (
    <Container>
      <Image src={require(`../../../../assets/images/${image}.png`)} />
      <TextContainer>
        <Row>
          <Rate>
            <Icon src={Star} />
            <Text>{rate}</Text>
          </Rate>
          <Bookmark src={Bookmarker} />
        </Row>
        <Category>{category}</Category>
        <Row>
          <Title>{title}</Title>
          <Videos>
            <Play src={Player} />
            <Number>{videos}</Number>
          </Videos>
        </Row>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
    </Container>
  );
}

export default Card;
