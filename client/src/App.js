import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';


import Calculator from "./components/Calculator";
import Drumset from "./components/Drumset";
import DiceGame from "./components/DiceGame";
import WeatherApp from "./components/WeatherApp";
import Navbar from './components/Navbar';
import ToDoList from './components/ToDoList';
import ConfessionHome from './components/ConfessionHome';
import TimeNow from './components/TimeNow';



function App() {
  return (
    <div className="App">
    
      <Navbar />
      <div className="appSpace">  
        <Switch>
          <Route path="/components/calculator" component={Calculator} />
          <Route path="/components/confessionHome" component={ConfessionHome} />
          <Route path="/components/drumset" component={Drumset} />
          <Route path="/components/dice-game" component={DiceGame} />
          <Route path="/components/weather-app" component={WeatherApp} />
          <Route path="/components/ToDoList" component={ToDoList} />

        </Switch>
      </div>
      <div className="timeWidget align-middle"><TimeNow /></div>
    
    </div>
  );
}

export default App;
