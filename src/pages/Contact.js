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
      <form
        className="form"
        onSubmit={this.submitForm}
        action="https://formspree.io/xjvajeek"
        method="POST"
      >
        {/* <!-- add your custom form HTML here --> */}
        {/* <label>Email:</label>
        <input type="email" name="email" /> */}
        <input
          className="form-email"
          type="text"
          name="_replyto"
          placeholder="Reply to email address"
        />
        <label className="message-text"></label>
        <input
          className="form-message"
          type="text"
          name="message"
          placeholder="Message"
        />
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className="button">Submit</button>
        )}
        {status === "ERROR" && (
          <p>Ooops! There was an error. Please try again.</p>
        )}
      </form>
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
