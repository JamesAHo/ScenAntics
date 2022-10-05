import React from "react";

import {Link} from "react-router-dom";

import "../styles/Navbar.css"
import Login from "./Login";

function Navbar(props) {
  return (
    <div >
      <div className="nav-container" expand="lg"  sticky="top">
        <Link to="/login" >
          <div className="text-light">
            <h4 className="nav-title-font">ScenAncis</h4>
          </div>
        </Link>
        <ul className="navbar-nav ml-auto navitem-indent">
          <li className="nav-item">
            <Link to="/about">
              <div className="nav-font text-light">Sign Up</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login">
              <div className="nav-font text-light">Login</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;