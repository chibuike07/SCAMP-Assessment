import React from "react";
import "./App.css";
import LandingPage from "./pages/landing_page";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
