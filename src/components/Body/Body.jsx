import React, {Component} from "react";
import Form from "./Form";

class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
