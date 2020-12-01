import React from "react";
//import Background from "../../assets/images/headerImage.png"
import "./header.css";

function Header() {
  return (
    <div>
      <section className="header" style={{
        height: "50vh",
        backgroundImage: "url(https://www.uplers.com/wp-content/uploads/2020/05/Essential-Skills-to-look-for-when-you-Hire-Front-end-Developers.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: "75%",
        
        clipPath: "polygon(100% 0, 100% 75%, 69% 100%, 0 85%, 0 0)",
        
        backgroundAttachment: "fixed",
      }}></section>
    </div> 
  );
}

export default Header;
