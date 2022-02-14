import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import GameDetails from './components/GameDetails/GameDetails';
import CreateGame from './components/CreateGame/CreateGame';

function App() {
  return (
    <div className="App">
      <Route exact path={'/'} render={() => <Landing/>} />
      <Route exact path={'/videogames'} render={()=> <Home/>} />
      <Route exact path={'/videogame/:id'} render={()=> <GameDetails/>} />
      <Route exact path={'/videogame'} render={() => <CreateGame/>} />
    </div>
  );
}

export default App;
