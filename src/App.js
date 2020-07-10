import React, { Component } from 'react';
import './App.css';
import Nav from "./components/NavBar.js";
import Footer from './components/Footer';
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import Portfolio from './pages/Portfolio.js';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'font-awesome/css/font-awesome.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body{
  background-color: rgb(245, 245, 245);
    font-family: 'Quicksand', sans-serif;
}

::selection {
    background-color: yellow;
    color: black;
}

.App {
  text-align: center;
}

h1{
  font-family: 'Montserrat', sans-serif;
  width: fit-content;
  margin: auto;
  margin-top: 8px;
  font-size:calc(20px + 2vw);
}

h2{
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}

h3{
  font-family: 'Montserrat', sans-serif;
  margin: 1em auto 1em auto;
}

a{
  text-decoration: none;
  color: black;
}

a:hover{
  text-decoration: underline;
}

.textContainer {
  /*background-color: white;*/
  /*border: 1px solid rgba(0, 0, 0, 0.10);*/
  width: fit-content;
  margin: auto;
  padding: 1em;
  max-width: 480px;
}

ul {
 list-style: none;
 padding-inline-start: 0;
}

#portfolioWrapper {
  display: grid;  
  margin-top: 12vh;
  min-height: 100vh;
}

#loading{
  margin: 16vh auto 1em auto;
}

#search{
  font-family: Quicksand, FontAwesome;
  border: 1px solid rgba(0, 0, 0, 0.10);
  padding: 0.5em;
  font-size: 1.0em;
}

.githubItem{
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.10);
  width: 80%;
  max-width: 350px;
  margin: auto;
  margin-bottom: 1em;
  padding: 1em;
}

.githubItem p {
  margin: 0;
}

.frameStyle{
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.10);
  width: fit-content;
  margin: auto;
  margin-top: 1em;
  padding: 1em;
  max-width: 80%;
}

.frameStyle a {
  max-width: 80%;
}

 #contactWrapper {
  display: grid;  
  margin-top: 12vh;
  min-height: 100vh;
 }

.contactList li{
  margin: 1em 0 1em 0;
  max-width: 400px;
}

@media only screen and (max-width:840px) {
  
  *{
    font-size: 1.02em;
  }

  .nav-links{
    justify-content: space-between;
  }

  .textContainer {
    max-width: 80%;
  }
}
`;

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;
