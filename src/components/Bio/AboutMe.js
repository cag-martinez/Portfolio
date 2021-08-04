import React from "react";
import picture from "../../assets/images/suit.png";
import './aboutMe.css';

function AboutMe() {
  return (
    <div>
      <div className="aboutMeCard card mb-3" style={{maxWwidth: '540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={picture} className="img-fluid rounded-start" style={{maxBlockSize: '250px'}} alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
