import { Route, Switch } from "react-router";
import Home from './pages/Home';
import Interesses from './pages/Interesses';
import Login from './pages/Login';
import Conta from './pages/Conta';
import { Container } from "react-bootstrap";
import PrivateRoute from "./data/PrivateRoute";

function App() {
  return (
    <>
      <Route exact path="/" component={Login} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Container>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/interesses" component={Interesses} />
                <Route path="/conta" component={Conta} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
