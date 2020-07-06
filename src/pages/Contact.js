import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div>
      <form className="form" style={{ display: "fluid", justifyContent: "center", alignItems: "center", possition: "relative" }}>
        <div className="form-group">
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Name">              
            </input>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="email@email.com"
          />
        
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Message"
            rows="3"
          ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
