import React, { Component } from "react";

class TestFechtAPI extends Component {
  constructor() {
    super();
    this.state = {
      companies: ["a", "b"]
    };
  }

  componentDidMount() {
    fetch("https://prodigi-api-advanced.herokuapp.com/api/companies")
      .then(v => v.json())
      .then(v => {
        this.setState({ companies: v });
      });
  }
  render() {
    const items = this.state.companies.map((l, i) => <li key={i}>{l.name}</li>);
    return <div>{<ul>{items}</ul>}</div>;
  }
}

export default TestFechtAPI;
