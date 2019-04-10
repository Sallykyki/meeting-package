import React, {Component} from "react";
import {Link} from "react-router-dom";
class LoginPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
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
