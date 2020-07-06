import React from "react";
import "./home.css";
import picture from "../assets/images/profilePicture.png";

function Home() {
  return (
    <div>
      <div className="cardPicture">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Junior full stack web developer</p>
        </div>
      </div>

      <div className="cardContact">
        <div className="card-header">Contact:</div>
        <ul className="list-group list-group-flush">
          <a href="https://github.com/cag-martinez">Github</a>
          <a href="https://www.linkedin.com/in/christian-gomez-martinez-0b06241aa/">
            LinkedIn
          </a>
          <li>Email address: gomez9289@gmail.com</li>
          <li>Phone number: 704-603-7988</li>
        </ul>
      </div>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">
            Solutions-driven full stack web developer applying technical
            skillset towards building functional web applications. With two
            years of customer acquisition and relationships management at a bank
            and four years working at a top-level country club as a sous chef
            leading a fantastic team there is a lot that I have learned and
            experienced. Although fascinating, the most exhilarating moments are
            those spent solving problems by creating user-friendly interfaces.My
            skills include HTML, CSS, JavaScript, and Node using programs such
            as Mysql or visual studio code. With the knowledge I have acquired
            from the full stack web development bootcamp at The University of
            North Carolina at Charlotte, I have been able to collaborate with
            small teams in various projects in which not only have I been able
            to learn but also have had the opportunity to teach and showcase my
            communication and organizational skills. My fast learning abilities
            have allowed me to work through projects at a rapid pace and also
            solve complex problems in a timely manner allowing me more time to
            focus on the smaller details. With a strong desire to continuously
            learn new skills, I want to continue to create mobile-first designs
            for users to have a great experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
