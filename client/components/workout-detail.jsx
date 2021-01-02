import React from 'react';
import { format } from 'date-fns';
import Header from './header';
import JournalPage from '../pages/journal';
import { exercises, sets } from '../lib/getWorkoutDetails';

class WorkoutDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      date: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  formatDate(date) {
    const newDate = new Date(date);
    const formattedDate = format(newDate, 'MMMM dd, yyyy');
    return formattedDate;
  }

  componentDidMount() {
    fetch(`/api/sets/${this.props.workoutId} `)
      .then(res => res.json())
      .then(result => this.setState({
        exercises: sets(exercises(result), result),
        date: this.formatDate(result[0].workoutDate)
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
    if (this.state.date) {
      return (
      <>
          <Header onClick={this.handleClick} button="Back"></Header>
          <div className="container w-90 vh-85 text-center overflow-scroll pop-out-colors">
          <p className="green-text fs-5 mt-3 mb-1">{this.state.date}</p>
            <h3 className="text-white mt-0">Workout Details</h3>
          {this.getExerciseDetails()}
        </div>
      </>
      );
    } else {
      return <JournalPage />;
    }
  }
}

export default WorkoutDetails;
