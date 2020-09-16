import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div className="navbar bg-dark fixed-top navbar-expand-md text-center">
        
          <Link className="nav-link" to="/components/calculator">BMI Calculator </Link>
          {/* <p className="card-body">Calculate your BMI by entering your height and weight</p> */}
        
          <Link className="nav-link"  to="/components/confession">Confession </Link>
          {/* <p className="card-body">Upload a secret confession</p> */}
        
          <Link className="nav-link" to="/components/drumset">Drumset </Link>
          {/* <p className="card-body">Play drumset using keyboard</p> */}
        
          <Link className="nav-link" to="/components/dice-game">Dice Game </Link>
          {/* <p className="card-body">Decide the lucky one with the dice game</p> */}
        
          <Link className="nav-link" to="/components/weather-app">Weather App </Link>
          {/* <p className="card-body">Find out the weather of your city</p> */}
        
      </div>
    );
  };

  export default Navbar;
  export {Link};