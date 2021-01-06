import React from 'react';
import Header from '../components/header';

export default function Home(props) {
  return (
    <>
      <Header button="Back"/>
      <div className="container text-center">
        <div className="row justify-content-center">
            <div className="log-workout my-4 home-image text-white fs-4 d-block w-75">Log Workout</div>
            <div className="view-exercises  my-4 home-image text-white fs-4 w-75">View Exercises</div>
        </div>
        <div className="pop-out-colors my-3 w-75 py-3 position-fixed bottom-0 start-50 translate-middle-x">
          <a href='profile'><i className="fas mx-4 fa-user green-text fs-1"></i></a>
          <a href='home'><i className="fas mx-5 fa-dumbbell green-text fs-1"></i></a>
          <a href='journal'><i className="fas mx-4 green-text fa-book fs-1"></i></a>
        </div>
      </div>
    </>
  );
}
/*
 <div className="container text-center">
        <div className="d-flex flex-column justify-content-center">
          <a href="log-workout">
            <div className="log-workout my-4 home-image text-white fs-4 d-block w-75">Log Workout</div>
          </a>
          <a href="view-exercises">
            <div className="view-exercises  my-4 home-image text-white fs-4 w-75">View Exercises</div>
          </a>
        </div>
        <div className="pop-out-colors d-flex my-3 w-90 py-3 position-fixed bottom-0 start-50 translate-middle-x">
          <a href='profile'><i className="fas col fa-user fs-1"></i></a>
          <a href='home'><i className="fas col fa-dumbbell fs-1"></i></a>
          <a href='journal'><i className="fas col fa-book fs-1"></i></a>
        </div>
      </div>
*/
