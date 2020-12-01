import React, { Component } from "react";
import Card from "../components/Card";
import img1 from "../assets/images/burgerIcon.png";
import img4 from "../assets/images/budget.png";
import img5 from "../assets/images/notepad.png";
import img6 from "../assets/images/pizzaSlice.png";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="flex-container  justify-content-center">
          <div className="row">
            <div className="col-12 col-md-6">
              <Card
                imgsrc={img4}
                title="Boss Budget"
                deploy={"http://boss-budget.herokuapp.com/"}
                github={"https://github.com/cag-martinez/Lyrics_plus"}
                description={
                  "A budgeting application built using JavaScript, React, MongoDB, and web API's that allows the user to carefully balance their income, savings, and expenses, while being able to view curent stock market trends."
                }
              />
            </div>
            <div className="col-12 col-md-6">
              <Card
                imgsrc={img6}
                title="Pizza Tracker"
                deploy={"https://pizza--tracker.herokuapp.com/"}
                github={"https://github.com/cag-martinez/Pizza_tracker"}
                description={
                  "We all love pizza! so why not build your own and track it with our app! this application was built using JavaScript, Express-Handlebars, MySQL, and Passport. This app not only allows users create and track a pizza but also allows busines owners to add employees to the system and be able to update the customer every step of the way."
                }
              />
            </div>
            <div className="col-12 col-md-6">
              <Card
                imgsrc={img5}
                title="Note Taker"
                deploy={"https://secure-beach-10858.herokuapp.com/"}
                github={"https://github.com/cag-martinez/note-taker"}
                description={
                  "Note taker, as the name says, allows users to take notes, save them and delete once they are no longer needed. The application was built using JavaScript, CSS, and Node.js"
                }
              />
            </div>
            <div className="col-12 col-md-6">
              <Card
                imgsrc={img1}
                title="Burger App"
                deploy={"https://dazzling-mount-rainier-71399.herokuapp.com/"}
                github={"https://github.com/cag-martinez/Burger"}
                description={
                  "Fun simple game built using Express-Handlebars, Javascript, MySQL, and Node that allows users to upload a fun burger name, view the burgers others have submited and DEVOUR ONE!"
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
