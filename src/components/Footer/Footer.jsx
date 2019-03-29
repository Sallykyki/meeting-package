import React, {Component} from "react";
import "./Footer.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitterSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import SolutionsIcon from "../../assets/img/solution.png";
import ProductsIcon from "../../assets/img/product.png";
import MoreIcon from "../../assets/img/more.png";

const solutionsLinks = ["Hotel Chains", "Independent Hotels", "Partners", "Unique Venues and Event spaces"];
const productsLinks = [
  "Online Booking Engine",
  "Global Distribution System",
  "Sales & Catering",
  "Integrations",
  "Analytics"
];
const moreLinks = ["Company", "Contact"];

const relatedLinks = [
  {title: "Solutions", icon: SolutionsIcon, links: solutionsLinks},
  {title: "Products", icon: ProductsIcon, links: productsLinks},
  {title: "More", icon: MoreIcon, links: moreLinks}
];

const someIconStyle = {marginRight: 0.5 + "em"};

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row ">
            <div className="col-sm-4 order-sm-2">
              <h4>meetingpackge</h4>
              <p> &copy; 2018 Cocouz Oy Ltd</p>
            </div>
            <div className="col-sm-8 ml-auto order-sm-1">
              <strong>Follow us on social media</strong>
              <br />
              <div className="some-sections">
                <FontAwesomeIcon icon={faFacebook} size="2x" style={someIconStyle} />
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" style={someIconStyle} />
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={someIconStyle} />
              </div>
            </div>
          </div>
          <hr className="footer-line" />
          <div className="row related-links">
            {relatedLinks.map((item, index) => (
              <div className="col-sm-4 text-center" key={index}>
                <img src={item.icon} alt={item.title} />
                <h4>{item.title}</h4>
                <ul>
                  {item.links.map((linkItem, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="/#">{linkItem}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
