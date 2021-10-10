import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import PAGE_NOT_FOUND from './page-not-found/Page-Not-Found'


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
       <PAGE_NOT_FOUND />
      </Route>
    </Switch>
  );
}

export default App;
