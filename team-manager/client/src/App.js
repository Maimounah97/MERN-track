import logo from './logo.svg';
import './App.css';
import PlayersList from './components/PlayersList';
import AddPlayer from './components/AddPlayer';
import PlayerStatus from './components/PlayerStatus';
// import Main from './views/Main';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="container">
      <BrowserRouter>
        <h2><Link to={"/players/list"}>Manage Players</Link> | <Link to={"/status/game"}>Manage Player Status</Link></h2>
        <div style={{ backgroundColor: 'white', marginTop: '30px', padding: '20px' }}>

          
            <Switch>
              <Route exact path="/players/list">
                <PlayersList />
              </Route>
              <Route exact path="/players/addPlayer">
                <AddPlayer />
              </Route>
              <Route exact path="/status/game">
                <PlayerStatus />
              </Route>
              <Route exact path="/status/game/:number">
                <PlayerStatus />
              </Route>
              {/* <Route path="/author/:id/edit">
            <p>hello</p>
              <Update />
            </Route> */}
            </Switch>
          
        </div>
        </BrowserRouter>

      </div>
    </div>

  );
}

export default App;
