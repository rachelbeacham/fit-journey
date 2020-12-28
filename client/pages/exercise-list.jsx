import React from 'react';
// import ExerciseDetailModal from './pages/exercise-detail-modal';

class ExerciseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/exercises')
      .then(res => res.json())
      .then(exercises => this.setState({
        exercises
      }));
  }

  handleChange(e) {
    fetch(`/api/exercises/${e.target.value}`)
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
            <select defaultValue="Filter by Muscle" className="pop-out-colors w-75 gray-text mb-3" onChange={this.handleChange}>
              <option disabled>Filter by Muscle</option>
              <option value='Arms'>Arms</option>
              <option value='Back'>Back</option>
              <option value='Chest'>Chest</option>
              <option value='Core'>Core</option>
              <option value='Legs'>Legs</option>
              <option value='Shoulders'>Shoulders</option>
            </select>
          </form>
        </div>
        {this.getExercises()}
      </>
    );
  }
}

export default ExerciseList;
