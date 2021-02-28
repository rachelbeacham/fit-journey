import React from 'react';
import AppContext from '../lib/app-context';
import Header from '../components/header';

export default class Favorites extends React.Component {
  render() {
    return (
     <>
     <Header button="Back" href="#profile" heading="My Favorites" />
     <p className="text-center fs-3 text-muted mt-2">You haven&apos;t saved any favorites yet!</p>
     <button className="position-absolute bottom-0 start-50 translate-middle-x my-3 green-button w-75 fs-2 py-2">
        View Exercise List
     </button>
     </>
    );
  }
}

Favorites.contextType = AppContext;
