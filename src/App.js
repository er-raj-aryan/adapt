import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
    <Switch className="App">     
      <Route exact path="/">
        <Navbar />
        <Home />
      </Route>
      <Route exact path="/cart">
        <Navbar />
        <Cart />
      </Route>

      {/* --page not found-- */}
      <Route >
        404 page not found
      </Route>
    </Switch>
  );
}

export default App;
