import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Apps from "./components/Apps";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Calculator from './components/Calculator/Calculator';
import BmiCalculator from './components/BmiCalculator';

import DiceGame from './components/DiceGame';
import Drumset from './components/Drumset';
import Note from './components/Note';

import ToDoList from './components/ToDoList';
import Kasturighar from './components/Kasturighar/Kasturighar';
import Naati from './components/Naati/Naati';
import WeatherApp from './components/WeatherApp';


function App() {
  return (
    <div className="App">

        <Navbar />

        <Routes>
            <Route exact path="/" element={<Header />} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/apps" element={<Apps/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/bmicalculator" element={<BmiCalculator/>} />
            <Route path="/diceGame" element={<DiceGame/>} />
              <Route path="/drumset" element={<Drumset />} />
              <Route path="/weather" element={<WeatherApp />} />

            <Route path="/note" element={<Note/>} />
              <Route path="/todolist" element={<ToDoList />} />
              <Route path="/kasturighar" element={<Kasturighar />} />
              <Route path="/naati" element={<Naati />} />
              <Route path="/calculator" element={<Calculator />} />

        </Routes>

    </div>

  );
}

export default App;
