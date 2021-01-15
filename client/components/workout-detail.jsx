import React from 'react';
import Header from './header';
import JournalPage from '../pages/journal';
import { exercises, sets } from '../lib/getWorkoutDetails';
import AppContext from '../lib/app-context';
import NavBar from './nav-bar';

export default class WorkoutDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      date: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const token = this.context.token;
    fetch(`/api/sets/${this.props.workoutId}`, {
      headers: {
        'X-Access-Token': token
      }
    })
      .then(res => res.json())
      .then(result => this.setState({
        exercises: sets(exercises(result), result),
        date: result[0].workoutDate
      }))
      .catch(err => console.error(err));
  }

  handleClick() {
    this.setState({
      date: ''
    });
  }

  getExerciseDetails() {
    const exercises = this.state.exercises;
    const fullWorkout = exercises.map((exercise, index) => {
      const sets = exercise.map((set, index) => {
        return (
          <div key={set.setId} className="row">
            <div className="col text-white">{index + 1}</div>
            <div className="col text-white">{set.reps}</div>
            <div className="col text-white mb-2">{set.weight}</div>
          </div>
        );
      });
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
    if (this.state.date) {
      return (
      <>
          <NavBar />
          <Header href='#journal' onClick={this.handleClick} button="Back"></Header>
          <div className="container w-90 vh-85 text-center overflow-auto pop-out-colors">
          <p className="text-white fs-5 mt-3 mb-1">{this.state.date}</p>
          <h3 className="green-text mt-0">Workout Details</h3>
          <p onClick={this.handleClick} className="text-white text-decoration-underline fs-5 d-none-sm">Back to workouts</p>
          {this.getExerciseDetails()}
        </div>
      </>
      );
    } else {
      return <JournalPage />;
    }
  }
}

WorkoutDetails.contextType = AppContext;
