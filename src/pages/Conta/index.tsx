import {
  ColumnsContainer,
  Container,
  Employee,
  Icon,
  LeftColumn,
  Nav,
  RightColumn,
  Image,
  ImagesContainer,
  Card,
  ImageCard,
  ButtonsContainer,
  ButtonIcon,
  Row,
  RowIcon,
  StarIcon,
  StarsContainer,
  TextContainer,
} from './styles';
import home from '../../assets/icons/home.svg';
import conteudo from '../../assets/icons/conteudo.svg';
import conta from '../../assets/icons/conta.svg';
import Funcionaria from '../../assets/images/funcionaria.png';
import Plants from '../../assets/images/card-image.png';
import Activity from '../../assets/icons/activity.svg';
import Book from '../../assets/icons/book.svg';
import Trees from '../../assets/icons/trees.svg';
import People from '../../assets/icons/people.svg';
import Person from '../../assets/icons/person.svg';
import Clock from '../../assets/icons/clock.svg';
import Star from '../../assets/icons/star.svg';

function Conta() {
  return (
    <Container>
      <Nav>
        <ul>
          <li>
            <a href="/home">
              <Icon src={home} /> Home
            </a>
          </li>
          <li>
            <a href="/home">
              <Icon src={conteudo} /> Conteúdo
            </a>
          </li>
          <li>
            <a href="/conta">
              <Icon src={conta} /> Conta
            </a>
          </li>
        </ul>
      </Nav>

      <ColumnsContainer>
        <RightColumn>
          <Employee>
            <Image src={Funcionaria} />
            <h2 className="nome">Nome Funcionário</h2>
          </Employee>
          <ImagesContainer>
            <Card>
              <ImageCard src={Plants} />
              <p className="description">Legenda do post</p>
            </Card>
            <Card>
              <ImageCard src={Plants} />
              <p className="description">Legenda do post</p>
            </Card>
            <Card>
              <ImageCard src={Plants} />
              <p className="description">Legenda do post</p>
            </Card>
            <Card>
              <ImageCard src={Plants} />
              <p className="description">Legenda do post</p>
            </Card>
            <Card>
              <ImageCard src={Plants} />
              <p className="description">Legenda do post</p>
            </Card>
            <Card>
              <ImageCard src={Plants} />
              <p className="description">Legenda do post</p>
            </Card>
          </ImagesContainer>
          <ButtonsContainer>
            <button>
              <ButtonIcon src={Activity} />
              Criar sala de discussão
            </button>
            <button>
              <ButtonIcon src={Activity} />
              Criar seminário ou evento
            </button>
          </ButtonsContainer>
        </RightColumn>

        <LeftColumn>
          <Row>
            <RowIcon src={Book} />
            <TextContainer>
              <h2 className="title">Amante da leitura</h2>
              <StarsContainer>
                <StarIcon src={Star} />
                <StarIcon src={Star} />
              </StarsContainer>
            </TextContainer>
          </Row>
          <Row>
            <RowIcon src={Trees} />
            <TextContainer>
              <h2 className="title">Colecionador de plantas</h2>
              <StarsContainer>
                <StarIcon src={Star} />
                <StarIcon src={Star} />
                <StarIcon src={Star} />
              </StarsContainer>
            </TextContainer>
          </Row>
          <Row>
            <RowIcon src={People} />
            <TextContainer>
              <h2 className="title">Engaja a comunidade</h2>
              <StarsContainer>
                <StarIcon src={Star} />
                <StarIcon src={Star} />
                <StarIcon src={Star} />
                <StarIcon src={Star} />
              </StarsContainer>
            </TextContainer>
          </Row>
          <Row>
            <RowIcon src={Person} />
            <TextContainer>
              <h2 className="title">ESG na veia</h2>
              <StarsContainer>
                <StarIcon src={Star} />
                <StarIcon src={Star} />
                <StarIcon src={Star} />
              </StarsContainer>
            </TextContainer>
          </Row>
          <Row>
            <RowIcon src={Clock} />
            <TextContainer>
              <h2 className="title">Mais de 100 minutos de conhecimento</h2>
              <StarsContainer>
                <StarIcon src={Star} />
                <StarIcon src={Star} />
                <StarIcon src={Star} />
                <StarIcon src={Star} />
              </StarsContainer>
            </TextContainer>
          </Row>
        </LeftColumn>
      </ColumnsContainer>
    </Container>
  );
}

export default Conta;
