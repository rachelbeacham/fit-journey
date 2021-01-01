import React from 'react';
import Header from '../components/header';
import { format } from 'date-fns';

class JournalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      workouts: []
    };
  }

  componentDidMount() {
    fetch(`/api/workouts/${this.state.userId}`)
      .then(res => res.json())
      .then(result => this.setState({
        workouts: result
      }))
      .catch(err => console.error(err));
  }

  formatDate(date) {
    const newDate = new Date(date);
    const formattedDate = format(newDate, 'MMMM dd, yyyy');
    return formattedDate;
  }

  renderLoggedWorkouts() {
    const workouts = this.state.workouts;
    const journalList = workouts.map(workout => {
      return (
          <div key={workout.workoutId} className="col-6 col-md-4 mt-3">
            <div className="pop-out-colors  lh-1 text-center">
              <p className="text-white mt-2">Date:</p>
              <p className="green-text">{this.formatDate(workout.workoutDate)}</p>
              <p className="text-white">Duration:</p>
              <p className="green-text">{workout.workoutDuration}</p>
              <p className="mb-2 text-light text-decoration-underline">See Full Workout</p>
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
        <button className="position-fixed bottom-0 start-50 translate-middle-x my-3 green-button w-75 fs-2 py-2">
          Log a Workout
        </button>
      </>
    );
  }

  render() {
    if (!this.state.workouts[0]) {
      return (
        <>
          <Header button='Back' heading='Logged Workouts' />
          <div className="container mt-1">
            <div className="row">
              {this.journalEmpty()}
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
        <Header button='Back' heading='Logged Workouts' />
        <div className="container mt-1">
          <div className="row justify-content-evenly">
            {this.renderLoggedWorkouts()}
          </div>
          <button className="position-fixed bottom-0 start-50 translate-middle-x my-3 green-button w-75 fs-2 py-2">
              Log a Workout
          </button>
        </div>
        </>
      );
    }
  }

}

export default JournalPage;
