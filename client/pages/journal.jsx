import React from 'react';
import Header from '../components/header';

class JournalPage extends React.Component {
  journalFull() {
    return (
      <>
      <div className="row justify-content-evenly">
        <div className="col-6 col-md-4 mt-3">
          <div className="pop-out-colors  lh-1 text-center">
            <p className="text-white mt-2">Date:</p>
            <p className="green-text">12/23/2020</p>
            <p className="text-white">Duration:</p>
            <p className="green-text">1 hour 30 mins</p>
            <p className="mb-1 text-light text-decoration-underline">See Full Workout</p>
          </div>
        </div>
        <div className="col-6 col-md-4 mt-3">
          <div className="pop-out-colors wh-75 lh-1 text-center">
            <p className="text-white mt-2">Date:</p>
            <p className="green-text">12/20/2020</p>
            <p className="text-white">Duration:</p>
            <p className="green-text">1 hour</p>
            <p className="mb-1 text-light text-decoration-underline">See Full Workout</p>
          </div>
        </div>
      </div>
      <button className="position-fixed bottom-0 start-50 translate-middle-x my-3 green-button w-75 fs-2 py-2">
        Log a Workout
      </button>
      </>
    );
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
    return (
    <>
    <Header button='Back' heading='Logged Workouts' />
    <div className="container mt-1">
      {this.journalFull()}
    </div>
    </>
    );
  }

}

export default JournalPage;
