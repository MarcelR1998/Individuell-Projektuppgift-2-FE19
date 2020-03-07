import React, { Component } from 'react';
import './App.css';
import Nav from "./Nav.js";
import Home from "./Home.js";
import Contact from "./Contact.js";
import Portfolio from './Portfolio.js';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </main>
        </div>
      </Router >
    );
  }
}

export default App;
