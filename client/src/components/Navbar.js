import React from "react";

import {Link} from "react-router-dom";

import "../styles/Navbar.css"

function Navbar(props) {
  return (
    <div>
      <div className="nav-container" expand="lg"  sticky="top">
        <Link to="/">
          <div class="text-light">
            <h4 class="nav-title-font">ScenAncis</h4>
          </div>
        </Link>
        <ul class="navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
            <Link to="/about">
              <div class="nav-font text-light">Sign Up</div>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/portfolio">
              <div class="nav-font text-light">Login</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;