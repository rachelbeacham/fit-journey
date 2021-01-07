import React from 'react';
import Header from '../components/header';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    window.location.hash = e.target.id;
  }

  render() {
    return (
    <>
      <Header noButtons="true" button="Back" />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="log-workout my-4 home-image d-block w-75" id="log-workout" onClick={this.handleClick}>
            <h3 className="position-absolute green-text w-100 bottom-0 start-50 translate-middle-x">Log Workout</h3>
          </div>
          <div className="view-exercises my-4 home-image w-75" id="view-exercises" onClick={this.handleClick}>
            <h3 className=" w-100 green-text position-absolute bottom-0 start-50 translate-middle-x">View exercises</h3>
          </div>
        </div>
        <div className="pop-out-colors d-flex justify-content-evenly my-3 w-75 py-3 position-fixed bottom-0 start-50 translate-middle-x">
          <a href="#profile"><i className="fas mx-4 fa-user green-text fs-1"></i></a>
          <a href="#"><i className="fas mx-4 fa-dumbbell green-text fs-1"></i></a>
          <a href="#journal"><i className="fas mx-4 fa-book green-text fs-1"></i></a>
        </div>
      </div>
    </>
    );
  }
}
