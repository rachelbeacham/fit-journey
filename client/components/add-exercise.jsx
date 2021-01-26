import React from 'react';
import AppContext from '../lib/app-context';
import ExerciseList from '../pages/exercise-list';

export default class AddExercise extends React.Component {
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
    const token = this.context.token;
    const { reps, weight } = this.state;
    const { workoutId, exerciseId } = this.props;
    const data = { reps, weight, workoutId, exerciseId };
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': token
      },
      body: JSON.stringify(data)
    };
    if (reps !== '' && weight !== '') {
      fetch('/api/sets', req)
        .then(res => res.json())
        .then(() => this.setState({
          setCount: this.state.setCount + 1
        }))
        .catch(err => console.error(err));
      this.setState({
        reps: '',
        weight: ''
      });
    }
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
    const { reps, weight } = this.state;
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
            <input type="number" name='reps' required="required" value={reps}
              className="w-100 text-center gray-text fs-3 w-md-50 h-75 pop-in-colors"
              onChange={this.handleChange}></input>
          </div>
          <div className="col text-center">
            <input type="number" name='weight' required="required" value={weight}
              className="w-100 text-center w-md-50 fs-3 gray-text h-75 pop-in-colors"
              onChange={this.handleChange}></input>
          </div>
        </div>
        <div className="d-flex justify-content-end">
              <button className="pop-out-colors text-white" onClick={this.handleClick}>Save this Set!</button>
        </div>
        <div className="text-center my-3">
          <button type="submit" onClick={this.props.handleClick} className="text-center px-2 fs-4 py-2 green-button">Add Another Exercise</button>
        </div>
      </form>
    </div>
      );
    }
  }
}

AddExercise.contextType = AppContext;

/* line 100 -           <p className="fs-3 me-3 green-text transition" onClick={this.handleClick}>Save this Set!</p>
*/
