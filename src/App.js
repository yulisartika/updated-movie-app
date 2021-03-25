import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      < Navbar />
      <Switch>
        <Route component={Home} path="/" exact={true} />
      </Switch>
    </Router>
  );
}

export default App;
