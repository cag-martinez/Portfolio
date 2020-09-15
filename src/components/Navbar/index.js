import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ico from "../../assets/images/icon.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      {/* <Link className="navbar-brand" to="/">
       
      </Link> */}
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/Home">
              <img src={ico} width="30" height="30" alt="" loading="lazy" />
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Projects">
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
