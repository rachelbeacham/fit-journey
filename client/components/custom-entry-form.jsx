import React from 'react';
import AppContext from '../lib/app-context';
import Header from './header';

export default class CustomEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location.hash = '#journal';
  }

  handleSubmit(e) {
    const token = this.context.token;
    const { name, type } = this.props;
    const data = { name, type };
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': token
      },
      body: JSON.stringify(data)
    };
    fetch(`/api/customWorkouts/${this.props.workoutId}`, req)
      .then(res => res.json())
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
      <Header noButtons='true' heading="Custom Workout" />
      <form onSubmit={this.handleSubmit}>
        <div className="row justify-content-center">
          <label htmlFor="name" className="my-1 w-75 text-white">Name</label>
          <input type="text" name="name" required placeholder="Name this workout!" onChange={this.props.handleChange}
            className="mb-3 gray-text w-75 pop-in-colors d-block"></input>
          <label htmlFor="customWorkoutType" className="my-1 w-75 text-white">Type</label>
          <input required type="text" name="type" onChange={this.props.handleChange}
            placeholder="e.g. Cardio, Yoga, Hike, etc."
            className="mb-3 w-75 gray-text pop-in-colors d-block"></input>
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 text-center w-100">
            <button type="submit" onClick={this.handleClick}
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

CustomEntryForm.contextType = AppContext;
