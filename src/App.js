import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Compunent/Navber/Nevbar";
import Home from "./Compunent/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar />
          <Home/>
        </Route>
        <Route path="/users">
          <Navbar />
        </Route>
        <Route path="/">
          <Navbar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
