import React  from "react";

const TabComponent = props => {
  return (
    <div className="tabs is-centered">
    <ul >
      {props.tabs.map((tab) => {
        const classes = `${props.current === tab ? "is-active" : null}`
        return (
          <li key={tab} onClick={props.handleTabChange.bind(this,tab)} className={classes}>
            <a>{tab}</a>
          </li>
        );
      })}
    </ul>
    </div>
    
  );
};

export default TabComponent;
