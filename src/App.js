import React from "react";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import About from './components/pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/services'>{Services}</Route>
          <Route path='/products'>{Products}</Route>
          <Route path='/about'>{About}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
