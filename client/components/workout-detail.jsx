import React from 'react';
import Header from './header';
import { exercises, sets } from '../lib/getWorkoutDetails';

class WorkoutDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: {}
    };
  }

  componentDidMount() {
    fetch('/api/sets/1')
      .then(res => res.json())
      .then(result => this.setState({
        exercises: sets(exercises(result), result)
      }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <Header button="Back"></Header>
        <div className="container w-90 vh-85 text-center overflow-scroll pop-out-colors">
          <p className="green-text fs-5 mt-3 mb-1">January 1st, 2021</p>
          <h3 className="text-white mt-0">Workout Details</h3>
          <h4 className="green-text text-start">Deadlift</h4>
          <div className="row">
            <p className="col text-decoration-underline text-muted">Set</p>
            <p className="col text-decoration-underline text-muted">Reps</p>
            <p className="col text-decoration-underline text-muted">Weight</p>
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
            <p className="col text-decoration-underline text-muted">Set</p>
            <p className="col text-decoration-underline text-muted">Reps</p>
            <p className="col text-decoration-underline text-muted">Weight</p>
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
          <h4 className="green-text text-start">Arnold Press</h4>
          <div className="row">
            <p className="col text-decoration-underline text-muted">Set</p>
            <p className="col text-decoration-underline text-muted">Reps</p>
            <p className="col text-decoration-underline text-muted">Weight</p>
          </div>
          <div className="row">
            <p className="col text-white">1</p>
            <p className="col text-white">10</p>
            <p className="col text-white">15</p>
          </div>
          <div className="row">
            <p className="col text-white">2</p>
            <p className="col text-white">10</p>
            <p className="col text-white">15</p>
          </div>
          <div className="row">
            <p className="col text-white">3</p>
            <p className="col text-white">7</p>
            <p className="col text-white">20</p>
          </div>
          <h4 className="green-text text-start">Arnold Press</h4>
          <div className="row">
            <p className="col text-decoration-underline text-muted">Set</p>
            <p className="col text-decoration-underline text-muted">Reps</p>
            <p className="col text-decoration-underline text-muted">Weight</p>
          </div>
          <div className="row">
            <p className="col text-white">1</p>
            <p className="col text-white">10</p>
            <p className="col text-white">15</p>
          </div>
          <div className="row">
            <p className="col text-white">2</p>
            <p className="col text-white">10</p>
            <p className="col text-white">15</p>
          </div>
          <div className="row">
            <p className="col text-white">3</p>
            <p className="col text-white">7</p>
            <p className="col text-white">20</p>
          </div>
          <h4 className="green-text text-start">Arnold Press</h4>
          <div className="row">
            <p className="col text-decoration-underline text-muted">Set</p>
            <p className="col text-decoration-underline text-muted">Reps</p>
            <p className="col text-decoration-underline text-muted">Weight</p>
          </div>
          <div className="row">
            <p className="col text-white">1</p>
            <p className="col text-white">10</p>
            <p className="col text-white">15</p>
          </div>
          <div className="row">
            <p className="col text-white">2</p>
            <p className="col text-white">10</p>
            <p className="col text-white">15</p>
          </div>
          <div className="row">
            <p className="col text-white">3</p>
            <p className="col text-white">7</p>
            <p className="col text-white">20</p>
          </div>
        </div>

      </>
    );
  }
}

export default WorkoutDetails;

/*
  const exercises = {
    squat: [
      {
        reps: 8,
        Weight: 135
      },
      {
        reps: 8,
        weight: 135
      },
      {
        reps: 5,
        weight: 155
      }
    ],
    deadlift: [
      {
        reps: 10,
        Weight: 135
      },
      {
        reps: 8,
        weight: 155
      },
      {
        reps: 5,
        weight: 185
      }
    ]
  }
  */
