import logo from './logo.svg';
import './App.css';
import Main from './views/main';
import Detail from './views/Detail';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <header className="App-header">

      <BrowserRouter>
        <Switch>
          <Route exact path="/products">
            <Main />
          </Route>
          <Route exact path="/products/:id">
            <Detail />
          </Route>
        </Switch>
      </BrowserRouter>
    </header>
  </div>
  );
}

export default App;
