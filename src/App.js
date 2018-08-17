import React, { Component } from "react";
import ListCompanies from "./containers/ListCompanies";
import MenuAppBar from "./containers/NavBar/MenuAppBar";
import { Switch, Route } from "react-router-dom";
import RouteTest from "./components/RouteTest";
class App extends Component {
  render() {
    return (
      // <RouteTest />
      <div>
        <MenuAppBar />
        <Switch>
          <Route exact path="/" component={RouteTest} />
          <Route exact path="/list-companies" component={ListCompanies} />
          {/* <FloatingActionButtons /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
