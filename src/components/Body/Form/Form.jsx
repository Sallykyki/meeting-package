import React, {Component} from "react";
import "./Form.scss";

const form = [
  {title: "Company Name", name: "companyName", type: "text", placeholder: "e.g. Company X"},
  {title: "First Name", name: "firstName", type: "text", placeholder: "e.g. John"},
  {title: "Last Name", name: "lastName", type: "text", placeholder: "e.g. Smith"},
  {title: "Email", name: "email", type: "email", placeholder: "e.g. john@abc.xyz"},
  {title: "Phone", name: "phone", type: "text", placeholder: "e.g. +358445673456"}
];
class Form extends Component {
  constructor() {
    super();
    this.state = {isChecked: false};
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked() {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    return (
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">Your Information</h4>
          <form>
            {form.map((item, index) => (
              <div key={index} className="form-group">
                <label htmlFor={item.name}>{item.title}</label>
                <br />
                <input
                  className="form-control personal-info"
                  name={item.name}
                  placeholder={item.placeholder}
                  id={item.name}
                  required
                />
              </div>
            ))}
            <div className="form-check">
              <input className="form-check-input" name="term" id="term" type="checkbox" onChange={this.handleChecked} />
              <label htmlFor="term">Agree to terms</label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={!this.state.isChecked}>
              <strong>Continue</strong>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
