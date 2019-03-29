import React, {Component} from "react";
import Logo from "../../assets/img/logo.png";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container">
          <img src={Logo} className="navbar-brand img-fluid" alt="logo img" />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span className="nav-link user-name">
                  <strong>Welcome, John</strong>
                </span>
              </li>
              <li className="nav-item">
                <div className="h-100 d-flex align-items-center">
                  <select className="nav-link language-select">
                    <option>EN</option>
                    <option>FI</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
