import { FormEvent, useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router';
import AuthContext from '../../data/AuthContext';
import { IUserLogin } from '../../models/Account/IUserLogin';
import { Color, Column, Container, Content, FormContainer } from './styles';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { login, isLogged } = useContext(AuthContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var user: IUserLogin = {
      email: email,
      password: password,
      rememberMe: rememberMe,
    };

    login(user);
  };

  return (
    <Container>
      {!isLogged ? (
        <Content>
          <Column className="left-column">
            <h1>
              Venha mudar o <Color>mundo</Color> e os seus <Color>hábitos</Color>{' '}
              também
            </h1>
          </Column>
          <Column className="right-column">
            <h3>Preencha conforme os dados da sua empresa:</h3>
            <FormContainer>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="" placeholder="funcional" />
                <input type="text" name="" placeholder="e-mail" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="" placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
              <button>
                Cadastre-se
              </button>
            </FormContainer>
          </Column>
        </Content>
      ) : (
        <Redirect to="tasks/list" />
      )}
    </Container>
  );
}

export default Login;
