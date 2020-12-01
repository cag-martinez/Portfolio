import React from "react";
import Background from "../../assets/images/magnifyingCode.png"
import "./header.css";

function Header() {
  return (
    <div>
      <section className="header" style={{backgroundImage: `url(${Background}),`}}></section>
    </div>
  );
}

export default Header;
