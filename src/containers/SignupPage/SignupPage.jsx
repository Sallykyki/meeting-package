import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {signUpRequest} from "../../redux/auth/authActions";
import "./SignupPage.scss";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "", email: "", password: ""};
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({name}));
  };

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({email}));
  };

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({password}));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUpRequest();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign Up</h5>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <div className="form-label-group">
                    <label htmlFor="inputName">Name</label>
                    <input
                      id="inputName"
                      className="form-control"
                      placeholder="Name"
                      onChange={this.onNameChange}
                      value={this.state.name}
                      required
                      autoFocus
                    />
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      onChange={this.onEmailChange}
                      value={this.state.email}
                      required
                    />
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      onChange={this.onPasswordChange}
                      value={this.state.password}
                      required
                    />
                  </div>
                  <Link to="/">
                    <p>Already have an account? Login</p>
                  </Link>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase">Sign up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {auth: state.auth};
};

const mapActionsToProps = {signUpRequest};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SignupPage);
