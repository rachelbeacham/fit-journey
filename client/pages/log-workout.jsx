import React from 'react';
import Header from '../components/header';
import InitialForm from '../components/log-workout-initial-form';
import ExerciseList from './exercise-list';
import CustomEntryForm from '../components/custom-entry-form';
import AppContext from '../lib/app-context';
import NavBar from '../components/nav-bar';

export default class LogWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutId: null
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
    if (e.target.value === 'exercises') {
      this.setState({
        isCustom: false
      });
    } else {
      this.setState({
        isCustom: true
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const token = this.context.token;
    const { date, duration, isCustom } = this.state;
    const data = { date, duration, isCustom };
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
    const { handleChange, handleClick, handleSubmit } = this;
    const { workoutId, isCustom, name, type } = this.state;
    if (!this.state.workoutId) {
      return (
        <>
          <NavBar />
          <Header button='Home' href='#' heading='Log a Workout' />
          <InitialForm onClick={handleClick} handleSubmit={handleSubmit} handleChange={handleChange} />
        </>
      );
    } else if (workoutId && !isCustom) {
      return (
        <>
          <ExerciseList workoutId={workoutId} />
        </>
      );
    } else if (workoutId && isCustom) {
      return (
        <>
          <CustomEntryForm handleChange={handleChange} name={name} type={type} isCustom={isCustom} workoutId={workoutId} />
        </>
      );
    }
  }
}

LogWorkout.contextType = AppContext;
