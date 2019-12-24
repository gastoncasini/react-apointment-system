import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MainPage from "./MainPage";
import SuccessPage from "./SuccessPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <MainPage />
          </Route>
          <Route exact path={"/success"}>
            <SuccessPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
