import React from 'react';
import Header from '../components/header';
import NavBar from '../components/nav-bar';
import WorkoutDetails from '../components/workout-detail';
import AppContext from '../lib/app-context';

export default class JournalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      workoutDetial: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('/api/workouts', {
      headers: {
        'X-Access-Token': this.context.token
      }
    })
      .then(res => res.json())
      .then(result => this.setState({
        workouts: result
      }))
      .catch(err => console.error(err));
  }

  handleClick(e) {
    if (e.target.id === 'log-workout') {
      window.location.hash = e.target.id;
    } else {
      this.setState({
        workoutDetial: e.target.id
      });
    }
  }

  renderLoggedWorkouts() {
    const workouts = this.state.workouts;
    const journalList = workouts.map(workout => {
      if (!workout.isCustom) {
        return (
          <div key={workout.workoutId} className="col-6 col-md-4 mt-3">
            <div className="pop-out-colors  lh-1 text-center">
              <p className="text-white mt-2">Date:</p>
              <p className="green-text">{workout.workoutDate}</p>
              <p className="text-white">Duration:</p>
              <p className="green-text">{workout.workoutDuration}</p>
              <p className="text-light transition pointer text-decoration-underline"
                 id={workout.workoutId} onClick={this.handleClick}>See Full Workout</p>
            </div>
          </div>
        );
      } else {
        return (
            <div key={workout.workoutId} className="col-6 col-md-4 mt-3">
              <div className="pop-out-colors  lh-1 text-center">
                <p className="text-white mt-2">Date:</p>
                <p className="green-text">{workout.workoutDate}</p>
                <p className="text-white">Duration:</p>
                <p className="green-text">{workout.workoutDuration}</p>
                <p className="gray-text">{workout.customWorkoutName} {workout.type}</p>
              </div>
            </div>
        );
      }
    });
    return journalList;
  }

  journalEmpty() {
    return (
      <>
        <p className="text-center fs-3 text-muted mt-2">You havent logged any workouts yet!</p>
        <button id='log-workout' onClick={this.handleClick} className="position-absolute bottom-0 start-50 translate-middle-x my-3 green-button w-75 fs-2 py-2">
          Log a Workout
        </button>
      </>
    );
  }

  render() {
    if (!this.state.workouts[0]) {
      return (
        <>
          <NavBar />
          <Header button='Home' href='#' heading='Logged Workouts' />
          <div className="container mt-1">
            <div className="row">
              {this.journalEmpty()}
            </div>
          </div>
        </>
      );
    } else if (!this.state.workoutDetial) {
      return (
        <>
        <NavBar />
        <Header button='Home' href="#" heading='Logged Workouts' />
        <div className="container mt-1">
          <div className="row vh-70 justify-content-evenly">
            {this.renderLoggedWorkouts()}
          </div>
          <button id='log-workout' onClick={this.handleClick} className="position-absolute bottom-0 start-50 translate-middle-x my-3 green-button w-75 fs-2 py-2">
              Log a Workout
          </button>
        </div>
        </>
      );
    } else {
      return <WorkoutDetails workoutId={this.state.workoutDetial} />;
    }
  }

}

JournalPage.contextType = AppContext;
