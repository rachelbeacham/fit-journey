import React from 'react';
import AppContext from '../lib/app-context';
import GoalsForm from './goals-form';

export default class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: []
    };
    this.addGoal = this.addGoal.bind(this);
  }

  componentDidMount() {

  }

  addGoal(newGoal) {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGoal)
    };
    fetch(`/api/goals/${this.context.user.userId}`, req)
      .then(res => res.json())
      .then(goal => {
        this.state.goals.push(goal);
        this.setState({
          goals: this.state.goals
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
      <GoalsForm onSubmit={this.addGoal} />
      <div className="pop-out-colors d-flex justify-content-center align-items-center gray-text overflow-scroll mt-3 vh-20">
          You haven&apos;t added any goals yet!
      </div>
      </>
    );
  }
}

Goals.contextType = AppContext;
