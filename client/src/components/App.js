import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./MainPage";
import SuccessPage from "./SuccessPage";
import NotFound from "./NotFound";

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

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
