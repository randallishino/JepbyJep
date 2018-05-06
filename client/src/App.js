import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Collaboration from "./pages/Collaboration";
import Shop from "./pages/Shop";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () =>
  <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/videos" component={Videos} />
        <Route exact path="/collaboration" component={Collaboration} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path ="/login" component={Login} />
        <Route exact path ="/register" component={Register} />
      </Switch>
  </Router>;
export default App;
