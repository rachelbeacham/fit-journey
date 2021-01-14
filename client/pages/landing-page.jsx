import React from 'react';
import Login from './log-in';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      demo: true
    });
  }

  render() {
    if (!this.state.demo) {
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
              Use Demo Account
          </button>
        </div>
      </div>
      );
    } else {
      return (
        <Login username="demoUser" password="password" />
      );
    }
  }
}

export default LandingPage;
