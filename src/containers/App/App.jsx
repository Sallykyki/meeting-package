import React, {Component} from "react";
import "./App.css";
import "../../components/Navbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
