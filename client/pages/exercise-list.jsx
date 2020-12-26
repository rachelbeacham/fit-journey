import React from 'react';

class ExerciseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    fetch('/api/exercises')
      .then(res => res.json())
      .then(exercises => this.setState({
        exercises
      }));
  }

  getExercises() {
    const exercises = this.state.exercises;
    const exerciseList = exercises.map(exercise => {
      return (
        <div key={exercise.exerciseName} className="mt-3 mx-2 border-bottom row">
          <div className="col lh-1 flex-col">
            <h4 className="text-white">{ exercise.exerciseName }</h4>
            <p className="gray-text">{ exercise.muscleName }</p>
            <p className="green-text">Add to Favorites</p>
          </div>
          <div className="col d-flex justify-content-end align-items-center">
            <i className="fas fa-question-circle question"></i>
          </div>
        </div>
      );
    });
    return exerciseList;
  }

  render() {
    return (
      <>
        <header className="container mt-3">
          <div className="row">
            <div className="col-2">
              <button className="pop-out-colors mt-2 gray-text top-button">Back</button>
            </div>
            <div className="col-10">
              <h1 className="oregano title green-text text-center">Fit Journey</h1>
            </div>
          </div>
        </header>

        <div className="col">
          <h1 className="text-white mt-3 text-center">Exercises</h1>
        </div>

        <div className="col">
          <form className="text-center">
            <select defaultValue="Filter by Muscle" className="pop-out-colors w-75 gray-text mb-3">
              <option disabled>Filter by Muscle</option>
              <option value='arms'>Arms</option>
              <option value='back'>Back</option>
              <option value='chest'>Chest</option>
              <option value='core'>Core</option>
              <option value='legs'>Legs</option>
              <option value='shoulders'>Shoulders</option>
            </select>
          </form>
        </div>
        {this.getExercises()}
      </>
    );
  }
}

export default ExerciseList;
