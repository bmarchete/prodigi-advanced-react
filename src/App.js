import React, { Component } from "react";
import TestFechtAPI from "./components/TestFechtAPI";
import FloatingActionButtons from "./components/FloatingActionButtons";
class App extends Component {
  render() {
    return (
      <div>
        <TestFechtAPI />
        <FloatingActionButtons />
      </div>
    );
  }
}

export default App;
