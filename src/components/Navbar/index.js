import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ico from "../../assets/images/icon.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div>
        <ul className="navbar-nav">
          {/* icon link to home page */}
          <li className="nav-item">
            <Link className="nav-link" to="/Home">
              <img src={ico} width="30" height="30" alt="" loading="lazy" />
            </Link>
          </li>
          {/* link to home page */}
          <li className="nav-item">
            <Link className="nav-link" to="/Home">
              Home
            </Link>
          </li>
          {/* linkl to projects page */}
          <li className="nav-item">
            <Link className="nav-link" to="/Projects">
              Projects
            </Link>
          </li>
          {/* link to contact page */}
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
