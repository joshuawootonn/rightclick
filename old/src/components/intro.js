import React from 'react';

class Intro extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <section className="hero is-light intro is-large">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Welcome To RightClick.GG 
            </h1>
            <h2 className="subtitle">
              When you are ready search your favorite League of Legends player above!
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;