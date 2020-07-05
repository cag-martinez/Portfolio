import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return(
    <ul className="nav justify-content-center">
        <li className="nav-item">
        <Link className="nav-link" to="/">
            Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Portfolio">
            Portfolio
        </Link>
      </li>
    </ul>
    );
}

export default Navbar;