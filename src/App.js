import React, { useState } from "react";
import './App.css';
import Main from './components/Main';
import HandleException from './components/HandleException';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Switch>
          <Route exact component={Main} path="/" ></Route>
          <Route path="/404" component={HandleException}></Route>
          <Route path="/401" component={Error}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
