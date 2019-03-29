import React, {Component} from "react";
import Form from "./Form";
import Booking from "./Booking";
import "./Body.scss";
class Body extends Component {
  render() {
    return (
      <div className="body px-1">
        <div className="container">
          <h1 className="page-title">Confirm your booking details</h1>
          <div className="row row-eq-height">
            <div className="col-sm-6 order-sm-2 mb-3 mb-sm-0">
              <Booking />
            </div>
            <div className="col-sm-6 order-sm-1">
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
