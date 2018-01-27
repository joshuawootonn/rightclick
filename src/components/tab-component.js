import React  from "react";

const TabComponent = props => {
  return (
    <ul className="tab tab-block">
      {props.tabs.map((tab) => {
        const classes = `tab-item ${props.current === tab ? "active" : null}`
        return (
          <li key={tab} onClick={props.handleTabChange.bind(this,tab)} className={classes}>
            <a>{tab}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default TabComponent;
