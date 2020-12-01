import React, { Component } from "react";
import "./home.css";
import picture from "../assets/images/suit.png";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container  flex-container justify-content-center">
          <div className="row home-row">
            <div className="col-sm-6">
              <div className="cardPicture shadow">
                <img src={picture} className="card-img" alt="..." />
              </div>
            </div>
            {/* about me section */}
            <div className="jumbotronHome col-sm-6 jumbotron-fluid">
              <div className="container">
                <h1 className="aboutMe display-4">A little about me</h1>
                <p className="lead">
                  I am an outdoor enthusiast, foodie and a solutions-driven web
                  developer with a passion for learning and helping others.
                  Based in Charlotte NC.
                </p>
              </div>
            </div>
            {/* projects section */}
            <div className="container">
              <p>
                <h1 className="previousWork">My recent work</h1>
              </p>
              <div className="row">
                <Projects />
              </div>
            </div>
            {/* card with languages, libraries and frameworks */}
            <div
              className="card col-sm-12"
              style={{ padding: "0px", margin: "0px", border: "0px" }}
            >
              <div className="card-body">
                <ul className="list-inline dev-icons">
                  <li className="list-inline-item">
                    <i className="fab fa-js-square"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-react"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-node-js"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-html5"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-css3-alt"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="devicon-mysql-plain"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="devicon-sequelize-plain"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="devicon-mongodb-plain"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-bootstrap"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-git"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-github"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-npm"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="devicon-jquery-plain"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="devicon-handlebars-plain"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="devicon-express-original"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="devicon-heroku-original"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-database"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-server"></i>
                  </li>
                </ul>
              </div>
            </div>
            {/* contact me section */}
            <div className="container">
              <div className="row col-md-12">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
