import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { NavbarData } from "./components/NavbarData";
import Home from "./pages/Home";
import SearcPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {NavbarData.map(data => <Route component={data.component} path={data.path} exact={data.exact} />)}
        <Route component={SearcPage} path="/search-page" exact={true} />
      </Switch>
    </Router>
  );
}

export default App;
