import React from 'react';

export default class Header extends React.Component {
  render() {
    if (this.props.noButtons === 'true') {
      return (
        <header className="container mt-3">
          <div className="row justify-content-center">
            <h1 className="oregano title green-text text-center">Fit Journey</h1>
          </div>
        </header>
      );
    }
    if (!this.props.workoutId) {
      return (
      <>
        <header className="container mt-3">
          <div className="row">
            <div className="col-2">
              <a href={this.props.href}>
                <button onClick={this.props.onClick} className="pop-out-colors mt-2 gray-text top-button">{this.props.button}
                </button>
              </a>
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
    } else {
      return (
        <>
          <header className="container mt-3">
            <div className="row">
              <div className="col ps-3">
                <button onClick={this.props.onClick} className="pop-out-colors mt-2 gray-text top-button">{this.props.button}</button>
              </div>
              <div className="col px-0 d-flex justify-content-center">
                <h1 className="oregano mt-2 title green-text text-center">Fit Journey</h1>
              </div>
              <div className="col pe-3 d-flex justify-content-end">
                <button className="pop-out-colors mt-2 gray-text top-button">Finish!</button>
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
}
