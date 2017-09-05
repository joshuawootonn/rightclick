import React from 'react';

class Tab extends React.Component{
  render() {
    return (
      <a onClick={this.props.handleClick}  className={this.props.isActive ? "is-active navbar-item is-tab" : "navbar-item is-tab"}>
        {this.props.data.name}
      </a>
    );
  }
};

export default Tab;