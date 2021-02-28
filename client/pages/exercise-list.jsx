import React from 'react';
import AddExercise from '../components/add-exercise';
import ExerciseDetail from '../components/exercise-detail';
import Header from '../components/header';
import NavBar from '../components/nav-bar';
import AppContext from '../lib/app-context';

class ExerciseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      infoBox: '',
      addBox: this.props.addBox,
      favorites: []
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
    fetch('/api/favorites', {
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

  handleChange(e) {
    if (e.target.value === 'All') {
      fetch('/api/exercises')
        .then(res => res.json())
        .then(exercises => this.setState({
          exercises
        }));
    } else {
      fetch(`/api/exercises/${e.target.value}`)
        .then(res => res.json())
        .then(exercises => this.setState({
          exercises
        }));
    }
  }

  handleClick(e) {
    if (e.target.tagName === 'BUTTON' && e.target.id) {
      this.setState({
        addBox: e.target.id
      });
    } else if (e.target.tagName === 'P') {
      const token = this.context.token;
      const exerciseId = e.target.id;
      const data = { exerciseId };
      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Access-Token': token
        },
        body: JSON.stringify(data)
      };
      fetch('/api/favorites', req)
        .then(res => res.json())
        .then(e.target.innerText = String.fromCharCode(0x2713) + ' Added to Favorites')
        .catch(err => console.error(err));
    } else {
      this.setState({
        infoBox: e.target.id,
        addBox: e.target.id
      });
    }
  }

  getInfoBox() {
    const exercises = this.state.exercises;
    const selectedExercise = exercises.find(exercise => exercise.exerciseId === parseInt(this.state.infoBox));
    return <ExerciseDetail name={selectedExercise.exerciseName}
      howTo={selectedExercise.howToDescription}
      image={selectedExercise.demoImage}
      handleClick={this.handleClick} />;
  }

  getAddBox() {
    const exercises = this.state.exercises;
    const selectedExercise = exercises.find(exercise => exercise.exerciseId === parseInt(this.state.addBox));
    return <AddExercise name={selectedExercise.exerciseName}
      workoutId={this.props.workoutId}
      exerciseId={selectedExercise.exerciseId}
      handleClick={this.handleClick} />;
  }

  getExercises() {
    const addButtonClass = this.props.workoutId
      ? 'green-button px-3 py-1 mx-1 transition'
      : 'd-none';
    const exercises = this.state.exercises;
    const favorites = this.state.favorites;
    let listType;
    if (this.context.location.path === 'favorites') {
      listType = this.props.favorites;
    } else {
      listType = exercises;
    }
    const exerciseList = listType.map(exercise => {
      let favoritesText;
      if (favorites.includes(exercise.exerciseId)) {
        favoritesText = String.fromCharCode(0x2713) + ' Added to Favorites';
      } else {
        favoritesText = 'Add to Favorites';
      }
      return (
        <div key={exercise.exerciseId} onClick={this.handleClick} className="mt-3 mx-2 border-bottom row">
          <div className="col lh-1 flex-col">
            <h4 className="text-white">{ exercise.exerciseName }</h4>
            <p className="gray-text">{ exercise.muscleName }</p>
            <p id={exercise.exerciseId} className="green-text pointer">{favoritesText}</p>
          </div>
          <div className="col d-flex justify-content-end align-items-center">
            <button id={exercise.exerciseId} className={addButtonClass}>ADD</button>
            <i className="fas fa-question-circle mx-1 question" id={exercise.exerciseId} onClick={this.handleClick}></i>
          </div>
        </div>
      );
    });
    return exerciseList;
  }

  render() {
    let element;
    let filterClass;
    let heading;
    if (this.context.location.path === 'favorites' && !this.state.infoBox && !this.state.addBox) {
      element = this.getExercises();
      filterClass = 'd-none';
      heading = 'My Favorites';
    } if (!this.state.infoBox && !this.state.addBox && this.context.location.path !== 'favorites') {
      element = this.getExercises();
      filterClass = 'col';
      heading = 'Exercises';
    } else if (this.state.infoBox) {
      element = this.getInfoBox();
      filterClass = 'd-none';
      heading = 'Exercise';
    } else if (this.state.addBox) {
      element = this.getAddBox();
      filterClass = 'd-none';
      heading = 'Add Exercise';
    }
    const headerButton = this.props.workoutId
      ? 'Finish'
      : 'Home';
    const headerHref = this.props.workoutId
      ? '#journal'
      : '#';
    return (
      <>
        <NavBar />
        <Header button={headerButton} href={headerHref} workoutId={this.props.workoutId} heading={heading}/>
        <div className={filterClass}>
          <form className="text-center">
            <select defaultValue="Filter by Muscle" className="pop-out-colors w-75 gray-text mb-3" onChange={this.handleChange}>
              <option disabled>Filter by Muscle</option>
              <option value='All'>All muscle groups</option>
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
ExerciseList.contextType = AppContext;
export default ExerciseList;
