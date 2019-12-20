import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="navbar-title" href="/">
          What's the Weather?{" "}
          <span role="img" aria-label="cloud emoji">
            🌦️
          </span>
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-about">
              <a className="nav-link" href="/about">
                ABOUT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
