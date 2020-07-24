import React from "react";
import "./contact.css";

// function Contact() {
//   return (
//     <div>
//       <form className="form" style={{ display: "fluid", justifyContent: "center", alignItems: "center", possition: "relative" }}>
//         <div className="form-group">
//           <input
//             className="form-control"
//             id="exampleFormControlTextarea1"
//             placeholder="Name">              
//             </input>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleFormControlInput1"
//             placeholder="email@email.com"
//           />
        
//         <div className="form-group">
//           <textarea
//             className="form-control"
//             id="exampleFormControlTextarea1"
//             placeholder="Message"
//             rows="3"
//           ></textarea>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Contact;

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
      className="form" style={{ display: "fluid", justifyContent: "center", alignItems: "center", possition: "relative"}}
        onSubmit={this.submitForm}
        action="https://formspree.io/xjvajeek"
        method="POST"
      >
        {/* <!-- add your custom form HTML here --> */}
        {/* <label>Email:</label>
        <input type="email" name="email" /> */}
        <input type="text" name="_replyto" placeholder="Your email" />
        <label>Message:</label>
        <input type="text" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
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