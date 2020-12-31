import React from 'react';
import Header from '../components/header';
import InitialForm from '../components/log-workout-initial-form';
import ExerciseList from './exercise-list';

class LogWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      date: '',
      duration: '',
      workoutId: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.id === 'date') {
      this.setState({
        date: e.target.value
      });
    } else {
      this.setState({
        duration: e.target.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { date, duration, userId } = this.state;
    const data = { date, duration, userId };
    const req = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch('/api/workouts', req)
      .then(res => res.json())
      .then(result => this.setState({
        workoutId: result.workoutId
      }))
      .catch(err => console.error(err));
  }

  render() {
    if (!this.state.workoutId) {
      return (
        <>
          <Header button='Back' heading='Log a Workout' />
          <InitialForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        </>
      );
    } else {
      return (
        <>
          <ExerciseList workoutId={this.state.workoutId} />
        </>
      );
    }
  }
}

export default LogWorkout;
