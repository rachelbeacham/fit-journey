import React from 'react';
import Header from '../components/header';
import WorkoutDetails from '../components/workout-detail';

class JournalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      workouts: [],
      workoutDetial: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(`/api/workouts/${this.state.userId}`)
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
      return (
          <div key={workout.workoutId} className="col-6 col-md-4 mt-3">
            <div className="pop-out-colors  lh-1 text-center">
              <p className="text-white mt-2">Date:</p>
              <p className="green-text">{workout.workoutDate}</p>
              <p className="text-white">Duration:</p>
              <p className="green-text">{workout.workoutDuration}</p>
              <p className="text-light text-decoration-underline"
                 id={workout.workoutId} onClick={this.handleClick}>See Full Workout</p>
            </div>
          </div>
      );
    });
    return journalList;
  }

  journalEmpty() {
    return (
      <>
        <p className="text-center fs-3 text-muted mt-2">You havent logged any workouts yet!</p>
        <button id='log-workout' onClick={this.handleClick} className="position-fixed bottom-0 start-50 translate-middle-x my-3 green-button w-75 fs-2 py-2">
          Log a Workout
        </button>
      </>
    );
  }

  render() {
    if (!this.state.workouts[0]) {
      return (
        <>
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
        <Header button='Home' href="#" heading='Logged Workouts' />
        <div className="container mt-1">
          <div className="row vh-70 justify-content-evenly">
            {this.renderLoggedWorkouts()}
          </div>
          <button id='log-workout' onClick={this.handleClick} className="position-fixed bottom-0 start-50 translate-middle-x my-3 green-button w-75 fs-2 py-2">
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

export default JournalPage;
