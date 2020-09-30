import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (

      <nav id="navbar" class="navbar navbar-expand-md fixed-top mb4">
          <Link class="navbar-brand ml-4" to="/">Shailendra Rijal</Link>
          <button class="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
            <i class="fa fa-bars"></i>
            </span>
          </button>
          
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-4">
              <li class="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link class="nav-link" to="/" >Home</Link>
              </li>
              <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link class="nav-link" to="/About" >About</Link>
              </li>
              <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link class="nav-link" to="/Projects" >Projects</Link>
              </li>
              <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link class="nav-link" to="/Apps" >Apps</Link>
              </li>
              <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link class="nav-link" to="/Contact" >Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
    
    );
  };

  export default Navbar;
  export {Link};