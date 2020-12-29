import React from 'react';
import Header from './header';

class LogWorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 1
    };
  }

  render() {
    return (
      <>
       <Header button='Discard' heading='Log a Workout' />
       <div className="container">
        <form>
          <div className="row justify-content-center">
            <label htmlFor="date" className="my-1 w-75 text-white">Date</label>
            <input type="date" id="date" className="mb-3 gray-text w-75 pop-in-colors d-block"></input>
            <label htmlFor="duration" className="my-1 w-75 text-white">Duration</label>
            <input type="text" placeholder="How long was your workout?" id="duration" className="mb-3 w-75 gray-text pop-in-colors d-block"></input>
            <button type="submit" className="bottom-button my-5 green-button w-75 fs-2 py-2">Add Exercises</button>
          </div>
        </form>
      </div>
      </>
    );
  }
}

export default LogWorkoutForm;
