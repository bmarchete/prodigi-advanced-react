import React, { Component } from "react";
import ListCompanies from "./containers/ListCompanies";
import FloatingActionButtons from "./components/FloatingActionButtons";
class App extends Component {
  render() {
    return (
      <div>
        <ListCompanies />
        {/* <FloatingActionButtons /> */}
      </div>
    );
  }
}

export default App;
