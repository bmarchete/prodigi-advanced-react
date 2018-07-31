import React from "react";
import CompanyItem from "./CompanyItem";

const CompanyList = props => {
  const items = props.data.map(d => (
    <CompanyItem key={d.id} value={d.name} id={d.id} onClick={props.onClick} />
  ));
  return <ul>{items}</ul>;
};

export default CompanyList;
