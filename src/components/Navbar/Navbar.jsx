import React, {Component} from "react";
import Logo from "../../assets/img/logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <img src={Logo} alt="logo img" />
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">Welcome, John </li>
            <li className="nav-item">
              <select>
                <option>EN</option>
                <option>FI</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
