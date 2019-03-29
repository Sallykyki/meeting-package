import React, {Component} from "react";
import Form from "./Form";
import Booking from "./Booking";

class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Form />
          </div>
          <div className="col-sm-6">
            <Booking />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
