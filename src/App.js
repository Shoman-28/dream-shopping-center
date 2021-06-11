import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Compunent/Navber/Nevbar'
import Home from "./Compunent/Home/Home";
function App() {
  return (
    <Router>
    <Switch>
    <Route path="/">
      <Navbar />
    </Route>
    <Route path="/users">
    
    </Route>
    <Route path="/">
    
    </Route>
  </Switch>

</Router>
  );
}

export default App;
