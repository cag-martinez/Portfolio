import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card text-center">
        <div className="overflow">
          <img src={props.imgsrc} alt="altName" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title"> {props.title}</h4>
          <p className="card-text text-secondary">{props.description}</p>
          <a href={props.deploy} className="btn btn-outline-success">
            Deployed application
          </a>
          <a href={props.github} className="btn btn-outline-success">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
