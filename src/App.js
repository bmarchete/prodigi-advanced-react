import React, { Component } from "react";
import Home from "./components/Home";
import ListCompanies from "./containers/ListCompanies";
import FloatingActionButtons from "./components/FloatingActionButtons";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        <ListCompanies />
        {/* <FloatingActionButtons /> */}
      </div>
    );
  }
}

export default App;
