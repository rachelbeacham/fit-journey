import React from 'react';
import AppContext from './lib/app-context';
import Home from './pages/home';
import ExerciseList from './pages/exercise-list';
import LogWorkout from './pages/log-workout';
import JournalPage from './pages/journal';
import Profile from './pages/profile';
import CreateProfileForm from './components/create-profile-form';
import LandingPage from './pages/landing-page';
import parseRoute from './lib/parse-route';
import SignUp from './pages/sign-up';
import Login from './pages/log-in';
import decodeToken from './lib/decode-token';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      location: parseRoute(window.location.hash)
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const location = parseRoute(window.location.hash);
      this.setState({
        location
      });
    });
    const token = window.localStorage.getItem('react-context-jwt');
    const user = token ? decodeToken(token) : null;
    this.setState({ user, token });
  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    window.location.hash = '';
    this.setState({ user, token });
  }

  handleSignOut() {
    window.localStorage.removeItem('react-context-jwt');
    this.setState({ user: null });
  }

  renderPage() {
    const { location } = this.state;
    if (location.path === 'sign-up' && this.state.user === null) {
      return <SignUp />;
    }
    if (location.path === 'login' && this.state.user === null) {
      return <Login />;
    }
    if (this.state.user === null) {
      return <LandingPage />;
    }
    if (location.path === '') {
      return <Home />;
    }
    if (location.path === 'profile') {
      return <Profile />;
    }
    if (location.path === 'createProfile') {
      return <CreateProfileForm button="Back" href="#profile" />;
    }
    if (location.path === 'journal') {
      return <JournalPage button='Back' href='#' />;
    }
    if (location.path === 'view-exercises') {
      return <ExerciseList />;
    }
    if (location.path === 'log-workout') {
      return <LogWorkout button='Back' href='#' />;
    }
  }

  render() {
    const { user, location, token } = this.state;
    const { handleSignIn, handleSignOut } = this;
    const contextValue = { user, location, handleSignIn, handleSignOut, token };
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
