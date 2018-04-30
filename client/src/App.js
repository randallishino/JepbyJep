import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path ="/" component={Landing} />
        <Route exact path ="/home" component={Home} />
        </Switch>
      </div>
      </Router>;
export default App;
