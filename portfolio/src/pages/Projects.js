import React, { Component } from "react";
import Card from "../components/Card";
import img1 from "../assets/images/burger2.png";
import img2 from "../assets/images/employeeDirectory.png";
import img3 from "../assets/images/employeeTrackerNew.png";
import img4 from "../assets/images/lyricsPluss.png";
import img5 from "../assets/images/noteTaker.png";
import img6 from "../assets/images/pizzaBuilder.jpg.png";

class Projects extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img4} />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img5} />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img6} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;