import React from "react";


const Card = props => {
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="burger2" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title"> Card Title </h4>
                <p classNameName="card-text text-secondary">
                    PROJECT DESCRIPTION
                </p>
                <a href="google.com" className="btn btn-outline-success">LINK TO DEPLOYED APPLICATION</a>
                <a href="google.com" className="btn btn-outline-success">LINK TO GITHUB</a>
            </div>
        </div>
    )
}

export default Card;