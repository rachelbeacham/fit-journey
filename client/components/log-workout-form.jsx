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
       <form className="row">
        <div className="flex-column justify-content-center">
          <label htmlFor="date" className="form-label my-2 text-white">Date</label>
          <input type="date" id="date" className="form-control pop-in-colors w-75 d-block"></input>
          <label htmlFor="duration" className="form-label my-2 text-white">Duration</label>
          <input type="text" id="duration" className="form-control pop-in-colors w-75 d-block"></input>
          <button type="submit" className="green-button py-2 w-75">Add Exercises</button>
        </div>
       </form>
      </>
    );
  }
}

export default LogWorkoutForm;
