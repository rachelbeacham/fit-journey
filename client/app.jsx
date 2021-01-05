import React from 'react';
import ExerciseList from './pages/exercise-list';
import LogWorkout from './pages/log-workout';
import AddExercise from './components/add-exercise';
import JournalPage from './pages/journal';
import CreateProfileForm from './components/create-profile-form';
import LandingPage from './pages/landing-page';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: parseRoute(window.location.hash)
    };
  }

  conmponentDidMount() {
    window.addEventListener('hashchange', () => {
      const location = parseRoute(window.location.hash);
      this.setState({
        location
      });
    });
  }

  render() {
    return <LandingPage />;
  }
}
