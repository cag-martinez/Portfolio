import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div>
      <div className="project-card text-center">
        <div className="overflow">
          <img
            src={props.imgsrc}
            style={{ width: "200px", height: "150px" }}
            alt="altName"
            className="card-img-top"
          />
        </div>
        <div className="card-body">
          <h4 className="card-title"> {props.title}</h4>
          <p className="card-text">{props.description}</p>
          <a
            href={props.deploy}
            style={{ margin: "10px" }}
            className="btn btn-outline-success"
          >
            Link
          </a>
          <a
            href={props.github}
            style={{ margin: "10px" }}
            className="btn btn-outline-success"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
