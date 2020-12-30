import React from 'react';
import Header from '../components/header';
import InitialForm from '../components/log-workout-initial-form';
import ExerciseList from './exercise-list';

class LogWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      view: 'initial',
      date: '',
      duration: ''
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
    const data = {
      date: this.state.date,
      duration: this.state.duration,
      userId: this.state.userId
    };
    const req = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch('/api/workouts', req)
      .then(result => console.log(result))
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.view === 'initial') {
      return (
        <>
          <Header button='Back' heading='Log a Workout' />
          <InitialForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        </>
      );
    } else if (this.state.view === 'exercises') {
      return (
        <>
          <ExerciseList />
        </>
      );
    }
  }
}

export default LogWorkout;
