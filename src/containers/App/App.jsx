import React, {Component} from "react";
import "./App.css";
import "../../components/Navbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Body from "../../components/Body";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
