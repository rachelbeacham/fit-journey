import React from 'react';
import AppContext from './lib/app-context';
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
      user: null,
      location: parseRoute(window.location.hash)
    };
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const location = parseRoute(window.location.hash);
      this.setState({
        location
      });
    });

  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    this.setState({
      user
    });
  }

  renderPage() {
    const { location } = this.state;
    if (location.path === '') {
      return <LandingPage />;
    }
    if (location.path === 'sign-up') {
      return <SignUp />;
    }
    if (location.path === 'login') {
      return <Login />;
    }
  }

  render() {
    const { user, location } = this.state;
    const { handleSignIn } = this;
    const contextValue = { user, location, handleSignIn };
    return (
      <AppContext.Provider value={contextValue}>
        <>
          {this.renderPage()}
        </>
      </AppContext.Provider>
    );
  }
}

App.contextType = AppContext;
