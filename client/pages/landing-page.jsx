import React from 'react';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="text-center">
        <div className="landing-image"></div>
        <div className="landing-buttons">
          <button className="pop-in-colors mb-3 py-2 w-75 text-white fs-2">
            Login
            <a href="#login"></a>
            </button>
          <button className="pop-in-colors my-3 py-2 w-75 text-white fs-2">
            Sign Up
            <a href="#sign-up"></a>
            </button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
