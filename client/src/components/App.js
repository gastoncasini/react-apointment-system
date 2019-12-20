import React, { Component } from "react";
import Navbar from "./Navbar";
import Display from "./Display";
import Form from "./Form";
import "../css/app.css";
import { replaceArrayElement } from "../utils.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentInfo: ["", ""]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj) {
    const currentState = this.state.currentInfo;
    const updated = replaceArrayElement(currentState, obj);
    this.setState({ currentInfo: updated });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Display info={this.state.currentInfo} />

        <Form handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
