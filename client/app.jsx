import React from 'react';
import ExerciseList from './pages/exercise-list';
import LogWorkout from './pages/log-workout';
import AddExercise from './components/add-exercise';
import JournalPage from './pages/journal';
import CreateProfileForm from './components/create-profile-form';
import LandingPage from './pages/landing-page';
import parseRoute from './lib/parse-route';
import SignUp from './pages/sign-up';
import Login from './pages/log-in';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const location = parseRoute(window.location.hash);
      this.setState({
        location
      });
    });
  }

  render() {
    const { location } = this.state;
    if (location.path === '') {
      return <Login />;
    }
    if (location.path === 'sign-up') {
      return <SignUp />;
    }
  }
}
