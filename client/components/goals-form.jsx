import React from 'react';

export default class GoalsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      goal: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      goalDescription: this.state.goal,
      completed: false
    };
    this.props.onSubmit(newGoal);
    this.setState({
      goal: ''
    });
  }

  render() {
    const value = this.state.goal;
    return (
      <div className="row mt-3">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="goals" className="text-white fs-3 me-3">Goals:</label>
          <input
          required type="text" placeholder="Add a new goal"
           onChange={this.handleChange} value={value}
          className="gray-text ps-3 w-50 me-3 pop-in-colors"></input>
          <button type="submit" className="green-button py-1 px-3">ADD</button>
        </form>
      </div>
    );
  }
}
