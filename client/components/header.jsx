import React from 'react';
import AppContext from '../lib/app-context';

export default class Header extends React.Component {
  render() {
    if (this.props.noButtons === 'true') {
      return (
        <header className="container mt-3">
          <div className="row justify-content-center">
            <h1 className="oregano title title-lg green-text text-center">Fit Journey</h1>
          </div>
        </header>
      );
    } else {
      const { path } = this.context.location;
      let titleClass;
      let buttonClass;
      if (path === 'login' || path === 'sign-up') {
        titleClass = 'oregano title green-text text-center';
        buttonClass = 'pop-out-colors mt-2 gray-text top-button';
      } else {
        titleClass = 'oregano title title-lg green-text text-center';
        buttonClass = 'pop-out-colors mt-2 gray-text d-none-lg top-button';
      }
      return (
      <>
        <header className="container mt-3">
          <div className="row">
            <div className="col-2">
              <a href={this.props.href}>
                <button onClick={this.props.onClick} className={buttonClass}>{this.props.button}
                </button>
              </a>
            </div>
            <div className="col-10">
              <h1 className={titleClass}>Fit Journey</h1>
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

Header.contextType = AppContext;
