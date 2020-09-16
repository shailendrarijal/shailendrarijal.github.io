import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';


import Calculator from "./components/Calculator";
import Confession from "./components/Confession";
import Drumset from "./components/Drumset";
import DiceGame from "./components/DiceGame";
import WeatherApp from "./components/WeatherApp";
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
    
    <Navbar />
      <Switch>
        <Route path="/components/calculator" component={Calculator} />
        <Route path="/components/confession" component={Confession} />
        <Route path="/components/drumset" component={Drumset} />
        <Route path="/components/dice-game" component={DiceGame} />
        <Route path="/components/weather-app" component={WeatherApp} />
      </Switch>
    </div>
  );
}

export default App;
