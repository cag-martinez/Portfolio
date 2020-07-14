import React, { Component } from "react";
import Card from "../components/Card";
import img1 from "../assets/images/burger2.png";
import img2 from "../assets/images/employeeDirectory.png";
import img3 from "../assets/images/tracker.png";
import img4 from "../assets/images/bossBudget.png";
import img5 from "../assets/images/noteTaker.png";
import img6 from "../assets/images/newPizza.png";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
          <div className="col-md-4">
              <br></br>
              <Card
                imgsrc={img4}
                title="Boss Budget"
                deploy={"http://boss-budget.herokuapp.com/"}
                github={"https://github.com/cag-martinez/Lyrics_plus"}
                description={
                  "A budgeting application that allows the user to carefully balance their income and expenses, while being able to see curent stock market trends."
                }
              />
            </div>
            <div className="col-md-4">
              <br></br>
              <Card
                imgsrc={img6}
                title="Pizza Tracker"
                deploy={"https://pizza--tracker.herokuapp.com/"}
                github={"https://github.com/cag-martinez/Pizza_tracker"}
                description={
                  "we all love pizza! so why not build your own and track it with our app! this application also allows busines owners to add employees to the system and be able to update the customer every step of the way."
                }
              />
            </div>
            <br></br>
            <div className="col-md-4">
              <br></br>
              <Card
                imgsrc={img5}
                title="Note Taker"
                deploy={"https://secure-beach-10858.herokuapp.com/"}
                github={"https://github.com/cag-martinez/note-taker"}
                description={
                  "note taker, as the name says, lets users take notes to use later and save them or discard them when they are no longer needed."
                }
              />
            </div>
            <div className="col-md-4">
              <br></br>
              <Card
                imgsrc={img2}
                title="Employee Directory"
                deploy={"https://infinite-citadel-35350.herokuapp.com/"}
                github={"https://github.com/cag-martinez/employee_directory"}
                description={
                  "this application is designed for employers to be able to view and search for employees by name and also sort in alphabetical order."
                }
              />
            </div>
            <div className="col-md-4">
              <br></br>
              <Card
                imgsrc={img1}
                title="Burger App"
                deploy={
                  "https://dashboard.heroku.com/apps/dazzling-mount-rainier-71399"
                }
                github={"https://github.com/cag-martinez/Burger"}
                description={
                  "fun game that allows users to upload a fun burger name view the burgers others have submited and DEVOUR ONE!"
                }
              />
            </div>
            <div className="col-md-4">
              <br></br>
              <Card
                imgsrc={img3}
                title="Employee Tracker"
                deploy={"https://github.com/cag-martinez/Employee_tracker"}
                github={"https://github.com/cag-martinez/Employee_tracker"}
                description={
                  "CLI that allows employers to add and edit employees in a database."
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
