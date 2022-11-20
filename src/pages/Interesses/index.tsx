import { BallsContainer, ButtonContainer, Container, Content } from './styles';

function Interesses() {
  return (
    <Container>
      <Content>
        <h1>Escolha temas que mais te interessam</h1>
        <p>no mínimo 3 opções</p>
        <BallsContainer>
          <button className='familia'>Família</button>
          <button className='produtos'>Produtos</button>
          <button className='saude'>Saúde</button>
          <button className='c'>C++</button>
          <button className='agilidade'>Agilidade</button>
          <button className='flor'>Flor</button>
          <button className='qa'>QA</button>
          <button className='comportamento'>Comportamento</button>
          <button className='design'>Design</button>
          <button className='bem-estar'>Bem-estar</button>
          <button className='reciclagem'>Reciclagem</button>
          <button className='devops'>DevOps</button>
          <button className='apps'>APPs</button>
          <button className='esportes'>Esportes</button>
          <button className='jardinagem'>Jardinagem</button>
          <button className='educacao'>Educação</button>
          <button className='tecnologia'>Tecnologia</button>
          <button className='pets'>Pets</button>
          <button className='receitas'>Receitas</button>
          <button className='viagem'>Viagem</button>
        </BallsContainer>
        <ButtonContainer>
            <a href="/home">Próximo</a>
        </ButtonContainer>
      </Content>
    </Container>
  );
}

export default Interesses;
