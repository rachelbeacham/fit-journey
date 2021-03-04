import React from 'react';
import AppContext from '../lib/app-context';
import Header from '../components/header';
import ExerciseList from './exercise-list';
import NavBar from '../components/nav-bar';

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('/api/favoritesList', {
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': this.context.token
      }
    })
      .then(res => res.json())
      .then(favorites => this.setState({
        favorites
      }));
  }

  handleClick() {
    window.location.hash = 'view-exercises';
  }

  favoritesEmpty() {
    return (
      <>
      <p className="text-center fs-3 text-muted mt-2">You haven&apos;t saved any favorites yet!</p>
      <button onClick={this.handleClick} className="position-absolute bottom-0 start-50 translate-middle-x my-3 green-button w-75 fs-2 py-2">
          View Exercise List
      </button>
     </>
    );
  }

  render() {
    if (this.state.favorites[0]) {
      return (
        <ExerciseList favorites={this.state.favorites} />
      );
    } else {
      return (
     <>
     <NavBar />
     <Header button="Back" href="#profile" heading="My Favorites" />
     {this.favoritesEmpty()}
     </>
      );
    }
  }
}

Favorites.contextType = AppContext;
