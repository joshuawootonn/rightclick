import React  from "react";

const TabComponent = props => {
  return (
    <div className="tabs is-centered">
    <ul >
      {props.tabs.map((tab) => {
        const classes = `${props.current === tab ? "active" : null}`
        return (
          <li key={tab} onClick={props.handleTabChange.bind(this,tab)} >
            <a className={classes}>{tab}</a>
          </li>
        );
      })}
    </ul>
    </div>
    
  );
};

export default TabComponent;
