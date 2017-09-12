import React from 'react';

class NotFound extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <section className="hero is-light intro is-large">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Oops! 
            </h1>
            <h2>
              Check your spelling. Looks like that's not a player
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default NotFound;