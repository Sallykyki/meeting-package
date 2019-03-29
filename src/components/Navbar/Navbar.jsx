import React, {Component} from "react";
import Logo from "../../assets/img/logo.png";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} className="navbar-brand" alt="logo img" />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span className="user-name">
                  <strong>Welcome, John</strong>
                </span>
              </li>
              <li className="nav-item">
                <select className="language-select">
                  <option>EN</option>
                  <option>FI</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
