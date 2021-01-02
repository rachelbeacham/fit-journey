import React from 'react';
import Header from './header';
import { exercises, sets } from '../lib/getWorkoutDetails';

class WorkoutDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
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

  getExerciseDetails() {
    const exercises = this.state.exercises;
    const fullWorkout = exercises.map((exercise, index) => {
      const sets = [];
      for (let i = 0; i < exercise.length; i++) {
        const set = (
          <div key={exercise[i].setId} className="row">
            <div className="col text-white">{i + 1}</div>
            <div className="col text-white">{exercise[i].reps}</div>
            <div className="col text-white mb-2">{exercise[i].weight}</div>
          </div>);
        sets.push(set);
      }
      return (
        <>
          <h4 key={index} className="green-text text-start">{exercise[0].exerciseName}</h4>
          <div className="row">
            <p className="col text-decoration-underline text-muted">Set</p>
            <p className="col text-decoration-underline text-muted">Reps</p>
            <p className="col text-decoration-underline text-muted">Weight</p>
          </div>
          {sets}
        </>
      );
    });
    return fullWorkout;
  }

  render() {
    return (
      <>
        <Header button="Back"></Header>
        <div className="container w-90 vh-85 text-center overflow-scroll pop-out-colors">
          <p className="green-text fs-5 mt-3 mb-1">January 1st, 2021</p>
          <h3 className="text-white mt-0">Workout Details</h3>
          {this.getExerciseDetails()}
        </div>

      </>
    );
  }
}

export default WorkoutDetails;
