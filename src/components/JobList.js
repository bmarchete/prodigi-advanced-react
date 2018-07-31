import React from "react";
import JobItem from "./JobItem";

const JobList = props => {
  const items = props.data.map(d => (
    <JobItem key={d.id} value={d.title} id={d.id} />
  ));
  return <ul>{items}</ul>;
};

export default JobList;
