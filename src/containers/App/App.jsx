import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage/SignupPage";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          {/* <Route path="/booking" component={BookingList} /> */}
          {/* <Route path="/booking" component={Booking} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
