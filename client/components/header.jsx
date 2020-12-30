import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header className="container mt-3">
          <div className="row">
            <div className="col-2">
              <button className="pop-out-colors mt-2 gray-text top-button">{this.props.button}</button>
            </div>
            <div className="col-10">
              <h1 className="oregano title green-text text-center">Fit Journey</h1>
            </div>
          </div>
        </header>

        <div className="col">
          <h1 className="text-white mt-3 text-center">{this.props.heading}</h1>
        </div>
      </>
    );
  }
}