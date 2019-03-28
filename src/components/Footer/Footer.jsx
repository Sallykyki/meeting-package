import React, {Component} from "react";
import "./styles.scss";
import Logo from "../../assets/img/logo.png";

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img src={Logo} alt="logo img" />
            <p>Contact us</p>
          </div>
          <div className="col-sm-8 ml-auto">Follow us on social media</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4 text-center">
            <h4>Solutions</h4>
            <ul>
              <li>Hotel Chains</li>
              <li>Independent Hotels</li>
              <li>Partners</li>
              <li>Unique Venues and Event spaces</li>
            </ul>
          </div>
          <div className="col-sm-4 text-center">
            <h4>Products</h4>
            <ul>
              <li>Online Booking Engine</li>
              <li>Global Distribution System</li>
              <li>Sales &amp; Catering</li>
              <li>Integrations</li>
              <p>Analytics</p>
            </ul>
          </div>
          <div className="col-sm-4 text-center">
            <h4>More</h4>
            <ul>
              <li>Company</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
