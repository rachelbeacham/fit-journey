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
      </>
    );
  }
}

export default LogWorkoutForm;
