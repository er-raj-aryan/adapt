import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import { useTranslation } from "react-i18next";



function App() {
  const { t } = useTranslation();

  return (
    <Switch className="App">     
      <Route exact path="/">
        <Navbar title={t("logo")} />
        <Home />
      </Route>
      <Route exact path="/cart">
        <Navbar title={t("logo")}/>
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
