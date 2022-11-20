import {
  ButtonContainer,
  Cards,
  CardsRow,
  Color,
  Column,
  Container,
  ExternalButtonContainer,
  FlipperContainer,
  FooterContainer,
  Icon,
  Nav,
  ProfilesContainer,
  Row,
} from './styles';
import home from '../../assets/icons/home.svg';
import conteudo from '../../assets/icons/conteudo.svg';
import conta from '../../assets/icons/conta.svg';
import Dog from '../../assets/images/dog.png';
import { cardContent, profileContent, talksContent } from './content';
import Card from './_compose/Card';
import Profile from './_compose/Profile';
import Flipper from './_compose/Flipper';

function Home() {
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

      <Cards>
        <Row>
          <div>
            <h1 className="first-text">Pequenas escolhas&nbsp;</h1>
            <Color>mudam o mundo</Color>
          </div>
          <input type="text" placeholder="Pesquise por assuntos" />
        </Row>
        <CardsRow>
          {cardContent.map((item, index) => (
            <Card
              key={item.rate + index}
              image={item.image}
              rate={item.rate}
              category={item.category}
              title={item.title}
              videos={item.videos}
              subtitle={item.subtitle}
            />
          ))}
        </CardsRow>
      </Cards>

      <FooterContainer>
        <Column>
          <h2>Atendimento disponíveis</h2>
          <p>Segunda-feira</p>
          <ProfilesContainer>
            {profileContent.map((item, index) => (
              <Profile
                key={item.name + index}
                profission={item.profission}
                name={item.name}
                time={item.time}
                photo={item.photo}
              />
            ))}
          </ProfilesContainer>
        </Column>

        <Column>
          <h2>Palestras da semana</h2>
          <FlipperContainer>
            {talksContent.map((item, index) => (
              <Flipper
                key={item.title + index}
                image={item.image}
                title={item.title}
                time={item.time}
              />
            ))}
          </FlipperContainer>

          <ExternalButtonContainer>
            <ButtonContainer>
              <img
                src={Dog}
                alt="cara de um cachorro preto com a língua para fora"
              />
              <h2 className="que-tal">
                que tal descobrir novos temas? clique aqui e descubra!
              </h2>
            </ButtonContainer>
          </ExternalButtonContainer>
        </Column>
      </FooterContainer>
    </Container>
  );
}

export default Home;
