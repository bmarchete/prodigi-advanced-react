import React from "react";

const CompanyItem = props => {
  return (
    <li key={props.id} id={props.id} onClick={props.onClick}>
      {props.value}
    </li>
  );
};

export default CompanyItem;
