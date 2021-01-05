import React from 'react';
import ExerciseList from './pages/exercise-list';
import LogWorkout from './pages/log-workout';
import AddExercise from './components/add-exercise';
import JournalPage from './pages/journal';
import CreateProfileForm from './components/create-profile-form';
import LandingPage from './pages/landing-page';

export default class App extends React.Component {

  render() {
    return <LandingPage />;
  }
}
