import React from 'react';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: false,
      username: '',
      password: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      demo: true,
      username: 'demoUser',
      password: 'password'
    });
  }

  render() {
    return (
      <div className="text-center">
        <div className="landing-image"></div>
        <div className="landing-buttons">
          <a href="#login">
            <button className="pop-in-colors mb-3 py-2 w-75 text-white fs-2">
              Login
            </button>
          </a>
          <a href="#sign-up">
            <button className="pop-in-colors my-3 py-2 w-75 text-white fs-2">
            Sign Up
            </button>
          </a>
          <button className="pop-in-colors my-3 py-2 w-75 text-white fs-2" onClick={this.handleClick}>
              Skip Login & Demo!
          </button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
