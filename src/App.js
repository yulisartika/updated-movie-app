import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { RoutesData } from "./components/RoutesData";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {RoutesData.map((data) => (
          <Route
            component={data.component}
            path={data.path}
            exact={data.exact}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
