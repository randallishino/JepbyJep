import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Collaboration from "./pages/Collaboration";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path ="/" component={Landing} />
        <Route exact path ="/home" component={Home} />
        <Route exact path ="/videos" component={Videos} />
        <Route exact path ="/collaboration" component={Collaboration} />
        </Switch>
      </div>
      </Router>;
export default App;
