import React from 'react';
import ExerciseDetail from '../components/exercise-detail';
import Header from '../components/header';

class ExerciseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: this.props.view,
      exercises: [],
      infoBox: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    this.setState({
      infoBox: e.target.id
    });
  }

  getModal() {
    const exercises = this.state.exercises;
    const index = exercises.findIndex(exercise => exercise.exerciseId === parseInt(this.state.infoBox));
    return <ExerciseDetail name={this.state.exercises[index].exerciseName}
      howTo={this.state.exercises[index].howToDescription}
      image={this.state.exercises[index].demoImage}
      handleClick={this.handleClick} />;
  }

  getExercises() {
    const exercises = this.state.exercises;
    const exerciseList = exercises.map(exercise => {
      return (
        <div key={exercise.exerciseId} onClick={this.handleClick} className="mt-3 mx-2 border-bottom row">
          <div className="col lh-1 flex-col">
            <h4 className="text-white">{ exercise.exerciseName }</h4>
            <p className="gray-text">{ exercise.muscleName }</p>
            <p className="green-text">Add to Favorites</p>
          </div>
          <div className="col d-flex justify-content-end align-items-center">
            <i className="fas fa-question-circle question" id={exercise.exerciseId} onClick={this.handleClick}></i>
          </div>
        </div>
      );
    });
    return exerciseList;
  }

  render() {
    let element;
    if (!this.state.infoBox) {
      element = this.getExercises();
    } else {
      element = this.getModal();
    }
    return (
      <>
        <Header button='Back' heading='Exercises'/>

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
        {element}
      </>
    );
  }
}

export default ExerciseList;
