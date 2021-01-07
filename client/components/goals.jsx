import React from 'react';
import AppContext from '../lib/app-context';
import GoalsForm from './goals-form';
import Goal from './individual-goal';

export default class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: []
    };
    this.addGoal = this.addGoal.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch(`/api/goals/${this.context.user.userId}`)
      .then(res => res.json())
      .then(goals => this.setState({
        goals
      }))
      .catch(err => console.error(err));
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

  toggleCompleted(goalId) {
    const { goals } = this.state;
    const target = goals.find(goal => {
      if (goal.goalId === goalId) {
        return { completed: goal.completed };
      }
    });
    const req = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ completed: !target.completed })
    };
    fetch(`/api/goals/${goalId}`, req)
      .then(res => res.json())
      .then(data => {
        const updated = this.state.goals.slice();
        const index = updated.findIndex(goal => (goal.goalId === goalId));
        updated[index] = data[0];
        this.setState({
          goals: updated
        });
      });
  }

  renderGoalList() {
    if (!this.state.goals[0]) {
      return (
        <div className="pop-out-colors d-flex justify-content-center align-items-center gray-text overflow-scroll mt-3 vh-20">
          You haven&apos;t added any goals yet!
        </div>
      );
    } else {
      return (
        <div className="pop-out-colors gray-text overflow-scroll mt-3 vh-20">
           <ul className="list-group text-start">
            {
              this.state.goals.map(goal => {
                return (
                  <Goal key={goal.goalId}
                  goal={goal} toggleCompleted={this.toggleCompleted} />
                );
              })
            }
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <>
      <GoalsForm onSubmit={this.addGoal} />
      {this.renderGoalList()}
      </>
    );
  }
}

Goals.contextType = AppContext;
