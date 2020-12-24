import React from 'react';

class ExerciseList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    fetch('/api/exercises', {method: 'GET'})
        .then(res => res.json())
        .then(exercises => {
          this.props.exercises = exercises
          return this.props.exercises
        });
  }

  createElements() {
    const exercises = this.props.exercises
    const exerciseList = exercises.map(exercise => {
      return (
        <div className="mt-3 mx-2 border-bottom row">
          <div className="col lh-1 flex-col">
            <h4 className="white-text">{ exercise.exerciseName }</h4>
            <p className="gray-text">{ exercise.muscleName }</p>
            <p className="green-text">Add to Favorites</p>
          </div>
        </div>
      )
    })
    return exerciseList
    };

  render() {
    console.log(this.props)
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
          <h1 className="white-text mt-3 text-center">Exercises</h1>
        </div>

        <div className="col">
          <form className="text-center">
            <select className="pop-out-colors reg-font w-75 gray-text mb-3">
              <option defaultValue disabled>Filter by Muscle</option>
              <option value='arms'>Arms</option>
              <option value='back'>Back</option>
              <option value='chest'>Chest</option>
              <option value='core'>Core</option>
              <option value='legs'>Legs</option>
              <option value='shoulders'>Shoulders</option>
            </select>
          </form>
        </div>
        {this.createElements()}
      </>
    )
  }
}

export default ExerciseList;


/*

 <>
    <header class="container mt-3">
    <div class="row">
      <div class="col-2">
        <button class="pop-out-colors mt-2 gray-text top-button">Back</button>
      </div>
      <div class="col-10">
        <h1 class="oregano title green-text text-center">Fit Journey</h1>
      </div>
    </div>
  </header>

  <div class="col">
    <h1 class="white-text mt-3 text-center">Exercises</h1>
  </div>

  <div class="col">
    <form class="text-center">
      <select class="pop-out-colors reg-font w-75 gray-text mb-3">
        <option selected disabled>Filter by Muscle</option>
        <option>Arms</option>
        <option>Back</option>
        <option>Chest</option>
        <option>Core</option>
        <option>Legs</option>
        <option>Shoulders</option>
      </select>
    </form>
  </div>
  <div class="mt-3 mx-2 border-bottom row">
    <div class="col lh-1 flex-col">
      <h4 class="white-text">Ab Wheel</h4>
      <p class="gray-text">Core</p>
      <p class="green-text">Add to favorites</p>
    </div>
    <div class="col d-flex justify-content-end align-items-center">
      <i class="fas fa-question-circle question"></i>
    </div>
  </div>
  <div class="mt-3 mx-2 border-bottom row">
    <div class="col lh-1 flex-col">
      <h4 class="white-text">Arnold Press</h4>
      <p class="gray-text">Shoulders</p>
      <p class="green-text">Add to favorites</p>
    </div>
    <div class="col d-flex justify-content-end align-items-center">
      <i class="fas fa-question-circle question"></i>
    </div>
  </div>
  <div class="mt-3 mx-2 border-bottom row">
    <div class="col lh-1 flex-col">
      <h4 class="white-text">Back Extension</h4>
      <p class="gray-text">Back</p>
      <p class="green-text">Add to favorites</p>
    </div>
    <div class="col d-flex justify-content-end align-items-center">
      <i class="fas fa-question-circle question"></i>
    </div>
  </div>
  <div class="mt-3 mx-2 border-bottom row">
    <div class="col lh-1 flex-col">
      <h4 class="white-text">Barbell Bench Press</h4>
      <p class="gray-text">Chest</p>
      <p class="green-text">Add to favorites</p>
    </div>
    <div class="col d-flex justify-content-end align-items-center">
      <i class="fas fa-question-circle question"></i>
    </div>
  </div>
  </>

*/
