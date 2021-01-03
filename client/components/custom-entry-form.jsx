import React from 'react';
import Header from './header';

class CustomEntryForm extends React.Component {
  render() {
    return (
      <>
      <Header button="Back" heading="Custom Workout" />
      <form>
        <div className="row justify-content-center">
          <label htmlFor="date" className="my-1 w-75 text-white">Name</label>
          <input type="text" name="name" placeholder="Optional" onChange={this.props.onChange}
            className="mb-3 gray-text w-75 pop-in-colors d-block"></input>
          <label htmlFor="duration" className="my-1 w-75 text-white">Type</label>
          <input required type="text" name="customWorkoutType" onChange={this.props.onChange}
            placeholder="e.g. Cardio, Yoga, Hike, etc."
            className="mb-3 w-75 gray-text pop-in-colors d-block"></input>
          <div className="position-fixed bottom-0 start-50 translate-middle-x mb-3 text-center w-100">
            <button type="submit"
              className="my-3 green-button w-90 fs-2 py-2">
                Log Custom Workout
            </button>
          </div>
        </div>
      </form>
      </>
    );
  }
}

export default CustomEntryForm;
