import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        Portfolio
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/Home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Portfolio">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
