import React, { Component } from "react";
import JobList from "./JobList";
import CompanyList from "./CompanyList";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      jobs: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ jobs: "loading" });
    fetch(
      `https://prodigi-api-advanced.herokuapp.com/api/Companies/${
        e.target.id
      }/jobs`
    )
      // fetch(`api/Companies/${e.target.id}/jobs`)
      .then(v => v.json())
      .then(v => {
        this.setState({ jobs: v });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    // fetch("api/companies")
    fetch(`https://prodigi-api-advanced.herokuapp.com/api/companies`)
      .then(v => v.json())
      .then(v => {
        this.setState({ companies: v });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>List of Companies</h1>
        <hr />
        <p>Click on the item to see the list of Jobs</p>
        <CompanyList data={this.state.companies} onClick={this.handleClick} />

        <h2 style={{ marginTop: "40px" }}>List of Jobs</h2>
        <hr />

        {this.state.jobs === "loading" ? (
          <p>Loading...</p>
        ) : (
          <JobList data={this.state.jobs} />
        )}
      </div>
    );
  }
}

export default Home;
