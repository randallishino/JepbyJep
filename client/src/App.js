import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";


const App = () =>
  <Router>
    <div>
        <Route exact path ="/" component={Landing} />
      </div>
      </Router>;
export default App;
