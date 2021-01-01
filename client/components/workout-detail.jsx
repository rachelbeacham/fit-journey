import React from 'react';
import Header from './header';

class WorkoutDetails extends React.Component {
  render() {
    return (
      <>
        <Header button="Back"></Header>
        <div className="container text-center pop-out-colors">
          <p className="green-text">January 1st, 2021</p>
          <h3 className="text-white">Workout Details</h3>
          <h4 className="green-text text-start">Deadlift</h4>
          <div className="row">
            <p className="col text-decoration-underline gray-text">Set</p>
            <p className="col text-decoration-underline gray-text">Reps</p>
            <p className="col text-decoration-underline gray-text">Weight</p>
          </div>
          <div className="row">
            <p className="col text-white">1</p>
            <p className="col text-white">8</p>
            <p className="col text-white">135</p>
          </div>
          <div className="row">
            <p className="col text-white">2</p>
            <p className="col text-white">8</p>
            <p className="col text-white">155</p>
          </div>
          <div className="row">
            <p className="col text-white">3</p>
            <p className="col text-white">6</p>
            <p className="col text-white">185</p>
          </div>
          <h4 className="green-text text-start">Barbell Squat</h4>
          <div className="row">
            <p className="col text-decoration-underline gray-text">Set</p>
            <p className="col text-decoration-underline gray-text">Reps</p>
            <p className="col text-decoration-underline gray-text">Weight</p>
          </div>
          <div className="row">
            <p className="col text-white">1</p>
            <p className="col text-white">8</p>
            <p className="col text-white">135</p>
          </div>
          <div className="row">
            <p className="col text-white">2</p>
            <p className="col text-white">8</p>
            <p className="col text-white">135</p>
          </div>
          <div className="row">
            <p className="col text-white">3</p>
            <p className="col text-white">7</p>
            <p className="col text-white">155</p>
          </div>
        </div>

      </>
    );
  }
}

export default WorkoutDetails;
