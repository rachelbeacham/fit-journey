import React from 'react';
import AppContext from '../lib/app-context';

export default class NavBar extends React.Component {
  render() {
    const thirdLink = (this.context.location.path === 'log-workout') ? 'Finish!' : 'Sign Out';
    const thridHref = (this.context.location.path === 'log-workout') ? '#journal' : '#';
    const onClick = (this.context.location.path === 'log-workout') ? null : this.context.handleSignOut;
    return (
      <div className="navbar d-none-sm">
        <div className="container-fluid">
          <a href="#" className="brand oregano fs-1 green-text">Fit Journey</a>
          <ul className="d-flex nav-list mt-4">
            <li className="nav-item">
              <a className="nav-link fs-5 green-text" href="#profile">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 green-text" href="#journal">Journal</a>
            </li>
            <li className="nav-item">
              <a href={thridHref} onClick={onClick} className="nav-link fs-5 green-text">{thirdLink}</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

NavBar.contextType = AppContext;
