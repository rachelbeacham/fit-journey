import React from 'react';

export default class InitialForm extends React.Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit}>
          <div className="row justify-content-center">
            <label htmlFor="date" className="my-1 w-75 text-white">Date</label>
            <input required type="date" name="date"
              onChange={this.props.handleChange}
              className="mb-3 gray-text w-75 pop-in-colors d-block"></input>
            <label htmlFor="duration" className="my-1 w-75 text-white">Duration</label>
            <input required type="text" name="duration"
              onChange={this.props.handleChange}
              placeholder="How long was your workout?"
              className="mb-3 w-75 gray-text pop-in-colors d-block"></input>
            <button type="submit"
              className="position-fixed bottom-0 start-50 translate-middle-x my-3 green-button w-75 fs-2 py-2">
              Add Exercises
              </button>
          </div>
        </form>
      </div>
    );
  }
}
