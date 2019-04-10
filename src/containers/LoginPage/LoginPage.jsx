import React, {Component} from "react";
import {Link} from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({email}));
  };

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({password}));
  };

  handleSubmit = (e) => {
    alert("A name was submitted: " + this.state.email);
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <div className="form-label-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      onChange={this.onEmailChange}
                      value={this.email}
                      required
                      autoFocus
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
                      value={this.password}
                      required
                    />
                  </div>
                  <div>
                    <Link to="/signup">
                      <p>Don't have an account? Sign up</p>
                    </Link>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase">Sign in</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
