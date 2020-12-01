import React from "react";
import "./contact.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (

      <div className="jumbotron jumbotron-fluid">
  <div className="container">
      <form
        className="form"
        onSubmit={this.submitForm}
        action="https://formspree.io/xjvajeek"
        method="POST"
      >
        {/* <!-- add your custom form HTML here --> */}
        {/* <label>Email:</label>
        <input type="email" name="email" /> */}
        <label for="email">Email Address</label><input
          className="form-email"
          type="text"
          name="_replyto"
          
        />
        <label for="mesage">Message</label>
        <input
          className="form-message"
          type="text"
          name="message"
         
        />
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className="button btn-primary" style={{margin: "5px"}}>Submit</button>
        )}
        {status === "ERROR" && (
          <p>Ooops! There was an error. Please try again.</p>
        )}
      </form>
      </div>

      <div className="list-inline-item contactButtons">
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


      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
