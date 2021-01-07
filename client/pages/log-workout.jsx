import React from 'react';
import Header from '../components/header';
import InitialForm from '../components/log-workout-initial-form';
import ExerciseList from './exercise-list';
import CustomEntryForm from '../components/custom-entry-form';
import AppContext from '../lib/app-context';

export default class LogWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutId: null,
      type: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleClick(e) {
    this.setState({
      type: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const token = this.context.token;
    const { date, duration } = this.state;
    const data = { date, duration };
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': token
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
          <Header button='Home' href='#' heading='Log a Workout' />
          <InitialForm onClick={this.handleClick} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        </>
      );
    } else if (this.state.workoutId && this.state.type === 'exercises') {
      return (
        <>
          <ExerciseList workoutId={this.state.workoutId} />
        </>
      );
    } else if (this.state.workoutId && this.state.type === 'custom') {
      return (
        <>
          <CustomEntryForm handleChange={this.handleChange} name={this.state.name} type={this.state.customWorkoutType} workoutId={this.state.workoutId} />
        </>
      );
    }
  }
}

LogWorkout.contextType = AppContext;
