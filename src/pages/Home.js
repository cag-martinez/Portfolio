import React from "react";
import "./home.css";
import picture from "../assets/images/suit.png";
import Card from "../components/Card";
import img1 from "../assets/images/burgerIcon.png";
// import img2 from "../assets/images/employeeDirectory.png";
// import img3 from "../assets/images/tracker.png";
import img4 from "../assets/images/budget.png";
import img5 from "../assets/images/notepad.png";
import img6 from "../assets/images/pizzaSlice.png";


function Home() {
  return (
    <div className="row home-row">
      
      <div className="col-sm-6">
        <div className="cardPicture shadow">
          <img src={picture} className="card-img image-fluid" alt="..."  />
          <div className="card-body" >
            {/* <h3>Hi! My name is Christian</h3>
            <p className="card-text">I'm a full-stack web developer.</p> */}
            <div className="card-header"><h5>Lets conect</h5></div>
            <div className="list-inline-item ">
              <a className="gitHub m-2" href="https://github.com/cag-martinez">
                <i className="fab fa-github "></i>
              </a>
              <a
                className="linkedIn m-2"
                href="https://www.linkedin.com/in/christian-gomez-martinez-0b06241aa/"
              >
                <i className="fab fa-linkedin 2x"></i>
              </a>
              <a
                className="resume m-2"
                href="https://docs.google.com/document/d/18qw-lEY3oQNshFULbmP3Z0aQER8ksWDaQ9U3hTic1Kk/edit?usp=sharing"
              >
                <i className="far fa-file"></i>
              </a>
              <a
                className="email m-2"
                href="https://infinite-wildwood-08615.herokuapp.com/Contact"
              >
                {" "}
                <i className="fas fa-envelope-open-text"></i>
              </a>
            </div>
            {/* <div className="list-group ">
              <a>704-603-7988</a>
            </div> */}
          </div>
        </div>
        <br></br>
        <div className="col-sm-6">
          <div className="cardContact"></div>
        </div>
      </div>
      {/* <br></br> */}
      <div className="jumbotron col-sm-6 jumbotron-fluid">
        <div className="container">
          <h1 className="aboutMe display-4">A little about me</h1>
          <p className="lead">
            I am an outdoor enthusiast, foodie and a solutions-driven web
            developer with a passion for learning and helping others. Based in
            Charlotte NC. 
            
            {/* There is a lot that i have learned and experienced in
            my professional career. I have been a customer acquisition and
            relationships manager at a bank and spent four years working at a
            top-level country club as a sous chef leading a fantastic team. I
            have participated in two culinary competitons and also have
            participated in culinary events for non-profit organizations such as
            JDRF. Although fascinating, the most exhilarating moments are those
            when i am in front of my coputer writing code and making user
            friendly websites. */}
            
            {/* My skills include HTML5, CSS3, JavaScript, Reactjs, Nodejs, MongoDB,
            Mysql, OOP, MVC, API's, Git, CLI and visual studio code. With the
            knowledge I have acquired from the full stack web development
            bootcamp at The University of North Carolina at Charlotte, I have
            been able to collaborate with small teams in various projects in
            which not only have I been able to learn but also have had the
            opportunity to teach and showcase my communication and
            organizational skills. My fast learning abilities have allowed me to
            work through projects at a rapid pace and also solve complex
            problems in a timely manner allowing me more time to focus on the
            smaller details. With a strong desire to continuously learn new
            skills, I want to continue to create mobile-first designs for users
            to have a great experience. */}
          </p>
        </div>
      </div>
      

            {/* <div className= "bacground-opacity" style={{ background: "silver", opacity: "50%" }}> */}
      <div className="flex-container justify-content-center" style={{padding: "50px"}}>
      <div className="row">
        <div className="col-lg-12 col-sm-12">
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
        <div className="col-sm-12">
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

        <div className="col-sm-12">
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
        {/* <div className="col-6 col-md-6">
          <Card
            imgsrc={img2}
            title="Employee Directory"
            deploy={"https://infinite-citadel-35350.herokuapp.com/"}
            github={"https://github.com/cag-martinez/employee_directory"}
            description={
              "Created using React.js, Bootstrap, and JavaScript this application is designed for employers to be able to view and search for employees by name and also sort in alphabetical order."
            }
          />
        </div> */}
        <div className="col-sm-12">
        
          <Card
            imgsrc={img1}
            title="Burger App"
            deploy={
              "https://dashboard.heroku.com/apps/dazzling-mount-rainier-71399"
            }
            github={"https://github.com/cag-martinez/Burger"}
            description={
              "Fun simple game built using Express-Handlebars, Javascript, MySQL, and Node that allows users to upload a fun burger name, view the burgers others have submited and DEVOUR ONE!"
            }
          />
        </div>
        {/* <div className="col-6 col-md-6">
          <Card
            imgsrc={img3}
            title="Employee Tracker"
            deploy={"https://github.com/cag-martinez/Employee_tracker"}
            github={"https://github.com/cag-martinez/Employee_tracker"}
            description={
              "Simple Command Line Interface application that allows employers to add, edit, and remove employees within a database."
            }
          />
        </div> */}
      </div>
    </div>
    {/* </div> */}

          {/* card with languages, libraries and frameworks */}
          <div className="card col-sm-12" style={{ border: 0 }}>
        <div className="card-body">
          <div>
            <p>Languages : Frameworks : Libraries</p>
          </div>
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

    </div>
  );
}

export default Home;
