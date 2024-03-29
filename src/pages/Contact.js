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
            {/* input for email address */}
            <label for="email">Email Address</label>
            <input className="form-email" type="text" name="_replyto" />
            {/* input for message */}
            <label for="mesage">Message</label>
            <input className="form-message" type="text" name="message" />
            {status === "SUCCESS" ? (
              <p>Thank you!</p>
            ) : (
              // submit button
              <button className="button btn-primary" style={{ margin: "5px" }}>
                Send!
              </button>
            )}
            {status === "ERROR" && (
              <p>Ooops! There was an error. Please try again.</p>
            )}
          </form>
        </div>
        {/* conatct links */}
        <div className="list-inline-item contactButtons">
          {/* github */}
          <a className="gitHub m-2" href="https://github.com/cag-martinez">
            <i className="fab fa-github "></i>
          </a>
          {/* linked-in */}
          <a
            className="linkedIn m-2"
            href="https://www.linkedin.com/in/christian-gomez-martinez-0b06241aa/"
          >
            <i className="fab fa-linkedin 2x"></i>
          </a>
          <a
            className="email m-2"
            href="https://infinite-wildwood-08615.herokuapp.com/Contact"
          >
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
