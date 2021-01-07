import React from 'react';
import GoalsForm from './goals-form';
import GoalsList from './goals-list';

export default class Goals extends React.Component {
  render() {
    return (
      <>
      <GoalsForm />
      <GoalsList />
      </>
    );
  }
}
