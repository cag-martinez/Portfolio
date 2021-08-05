import React from "react";
import picture from "../../assets/images/suit.png";
import './aboutMe.css';

function AboutMe() {
  return (
    
      <div className="aboutMeCard card w-100" style={{maxWidth: '99%'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={picture} className="img-fluid rounded-start" style={{maxBlockSize: '225px'}} alt="..." />
          </div>
          <div className="col-md-8">
            <div className="aboutMeText card-body">
              <h5 className="card-title">A little about me</h5>
              <p className="card-text">
              I am an outdoor enthusiast, foodie and a solutions-driven web
                  developer with a passion for learning and helping others.
                  Based in Charlotte NC. 
              </p>
              {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default AboutMe;
