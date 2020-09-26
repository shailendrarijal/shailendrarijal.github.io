import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (

      <nav id="navbar" class="navbar navbar-expand-md fixed-top mb4">
          <Link class="navbar-brand ml-4" to="/">Shailendra Rijal</Link>
          <button class="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon">&lt;</span>
          </button>
          
          <div id="navbarSupportedContent" class="collapse navbar-collapse mr-auto">
            <ul class="navbar-nav mr-4">
              <Link class="nav-link" to="/About">About</Link>
              <Link class="nav-link" to="/Projects">Projects</Link>
              <Link class="nav-link" to="/Apps">Apps</Link>
              <Link class="nav-link" to="/Contact">Contact</Link>
            </ul>
          </div>
        </nav>
    
    );
  };

  export default Navbar;
  export {Link};