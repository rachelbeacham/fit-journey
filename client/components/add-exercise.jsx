import React from 'react';
import ExerciseList from '../pages/exercise-list';

class AddExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      setCount: 1,
      reps: '',
      weight: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    const { reps, weight } = this.state;
    const { workoutId, exerciseId } = this.props;
    const data = { reps, weight, workoutId, exerciseId };
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch('/api/sets', req)
      .then(res => res.json())
      .then(() => this.setState({
        setCount: this.state.setCount + 1
      }))
      .catch(err => console.error(err));
  }

  handleChange(e) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    this.handleClick();
    this.setState({
      view: 'exercises'
    });

  }

  render() {
    if (this.state.view === 'exercises') {
      return (
        <>
        <ExerciseList addBox='' workoutId={this.state.workoutId} />
        </>
      );
    } else {
      return (
    <div className="w-75 my-5 text-center justify-content-center container pop-out-colors">
      <h3 className="my-3 text-center text-white">{this.props.name}</h3>
      <div className="row mt-5">
        <div className="col">
          <p className="text-white">Set</p>
        </div>
        <div className="col">
          <p className="text-white">Reps</p>
        </div>
        <div className="col">
          <p className="text-white">Weight</p>
        </div>
      </div>
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col text-center">
            <p className="fs-2 gray-text">{this.state.setCount}</p>
          </div>
          <div className="col text-center">
            <input type="number" name='reps' required
              className="w-100 text-center gray-text fs-3 w-md-50 h-75 pop-in-colors"
              onChange={this.handleChange}></input>
          </div>
          <div className="col text-center">
            <input type="number" name='weight' required
              className="w-100 text-center w-md-50 fs-3 gray-text h-75 pop-in-colors"
              onChange={this.handleChange}></input>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <p className="fs-3 me-3 green-text" onClick={this.handleClick}>Save this Set!</p>
        </div>
        <div className="text-center my-3">
          <button onClick={this.props.handleClick} className="text-center px-4 fs-4 py-2 green-button">Add Another Exercise</button>
        </div>
      </form>
    </div>
      );
    }
  }
}

export default AddExercise;
