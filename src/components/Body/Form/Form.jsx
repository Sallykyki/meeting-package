import React, {Component} from "react";
import "./Form.scss";

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
            <div className="form-group">
              <label>Company Name</label>
              <br />
              <input className="form-control personal-info" name="companyname" placeholder="e.g. Company X" required />
            </div>
            <div className="form-group">
              <label>First Name</label>
              <br />
              <input className="form-control personal-info" name="firstname" placeholder="e.g. John" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <br />
              <input className="form-control personal-info" name="lastname" placeholder="e.g. Smith" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <br />
              <input
                type="email"
                className="form-control personal-info"
                name="email"
                placeholder="e.g. john@xyz.abc"
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <br />
              <input className="form-control personal-info" name="phone" placeholder="e.g. +358445673456" required />
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" onChange={this.handleChecked} />
              <label className="form-check-label" />
              Agree to terms
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
