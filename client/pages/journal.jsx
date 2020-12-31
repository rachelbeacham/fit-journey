import React from 'react';
import Header from '../components/header';

class JournalPage extends React.Component {
  render() {
    return (
    <>
    <Header button='Back' heading='Logged Workouts' />
    <div className="container mt-3">
      <div className="row justify-content-evenly">
        <div className="col">
          <div className="pop-out-colors lh-1 text-center">
            <p className="text-white mt-2">Date:</p>
            <p className="green-text">12/20/2020</p>
            <p className="text-white">Duration:</p>
            <p className="green-text">1 hour 30 minutes</p>
            <p className="green-text text-decoration-underline">See Full Workout</p>
          </div>
        </div>
        <div className="col">
          <div className="pop-out-colors lh-1 text-center">
            <p className="text-white mt-2">Date:</p>
            <p className="green-text">12/23/2020</p>
            <p className="text-white">Duration:</p>
            <p className="green-text">1 hour</p>
            <p className="green-text text-decoration-underline">See Full Workout</p>
          </div>
        </div>
      </div>
      <button className="position-fixed bottom-0 start-50 translate-middle-x my-3 green-button w-75 fs-2 py-2">
            Log a Workout
      </button>
    </div>
    </>
    );
  }

}

export default JournalPage;
