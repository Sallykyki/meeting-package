import React, {Component} from "react";
import "./Footer.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitterSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import SolutionsIcon from "../../assets/img/solution.png";
import ProductsIcon from "../../assets/img/product.png";
import MoreIcon from "../../assets/img/more.png";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row ">
            <div className="col-sm-8 ml-auto">
              <strong>Follow us on social media</strong>
              <br />
              <div className="some-sections">
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{marginRight: 0.5 + "em"}} />
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" style={{marginRight: 0.5 + "em"}} />
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{marginRight: 0.5 + "em"}} />
              </div>
            </div>
            <div className="col-sm-4">
              <h4>meetingpackge</h4>
              <p> &copy; 2018 Cocouz Oy Ltd</p>
            </div>
          </div>
          <hr className="footer-line" />
          <div className="row">
            <div className="col-sm-4 text-center">
              <img src={SolutionsIcon} alt="solutions" />
              <h4>Solutions</h4>
              <ul>
                <li>Hotel Chains</li>
                <li>Independent Hotels</li>
                <li>Partners</li>
                <li>Unique Venues and Event spaces</li>
              </ul>
            </div>
            <div className="col-sm-4 text-center">
              <img src={ProductsIcon} alt="products" />
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
              <img src={MoreIcon} alt="more" />
              <h4>More</h4>
              <ul>
                <li>Company</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
