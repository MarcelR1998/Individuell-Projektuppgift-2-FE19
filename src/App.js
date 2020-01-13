import React, { Component } from 'react';
import './App.css';
import Nav from "./Nav.js";
import Hem from "./Hem.js";
import Kontakt from "./Kontakt";
import Portfolj from './Portfolj.js';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Hem} />
            <Route path="/portfolj" component={Portfolj} />
            <Route path="/kontakt" component={Kontakt} />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
