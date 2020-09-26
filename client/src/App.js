import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Apps from "./components/Apps";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Calculator from './components/Calculator';

import DiceGame from './components/DiceGame';
import Drumset from './components/Drumset';
import Note from './components/Note';

import ToDoList from './components/ToDoList';

// import WeatherApp from './components/WeatherApp';


function App() {
  return (
    <Router>
    <div className="App">
     
      <Navbar />
      
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Apps" component={Apps} />
          <Route path="/Contact" component={Contact} />
            <Switch>
              {/* <Route path="/Weatherapp" component={WeatherApp} /> */}
              <Route path="/Calculator" component={Calculator} />
              <Route path="/DiceGame" component={DiceGame} />
              <Route path="/Drumset" component={Drumset} />
              <Route path="/Note" component={Note} />
              <Route path="/ToDoList" component={ToDoList} />
            </Switch>
        </Switch>

    </div>
    </Router>
  );
}

export default App;
