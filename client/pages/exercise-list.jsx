import React from 'react';

export default class ExerciseList extends React.Component {
  render() {
    return (
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
    )
  }
}
