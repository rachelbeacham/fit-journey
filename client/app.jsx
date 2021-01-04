import React from 'react';
import ExerciseList from './pages/exercise-list';
import LogWorkout from './pages/log-workout';
import AddExercise from './components/add-exercise';
import JournalPage from './pages/journal';

export default class App extends React.Component {

  render() {
    return <LogWorkout />;
  }
}
