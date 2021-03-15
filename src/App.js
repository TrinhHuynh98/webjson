import React, { useState } from "react";
import './App.css';
import Main from './components/Main.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Main />
      <Switch>
          <Route path="/404">
            <About />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
