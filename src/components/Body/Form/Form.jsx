import React, {Component} from "react";
import "./Form.scss";

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <div className="form-group">
              <label>Company Name</label>
              <br />
              <input className="form-control" name="companyname" placeholder="e.g. Company X" />
            </div>
            <label>First Name</label>
            <br />
            <input className="form-control" name="firstname" placeholder="e.g. John" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <br />
            <input className="form-control" name="lastname" placeholder="e.g. Smith" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <br />
            <input type="email" className="form-control" name="email" placeholder="e.g. john@xyz.abc" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <br />
            <input className="form-control" name="phone" placeholder="e.g. +358445673456" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
