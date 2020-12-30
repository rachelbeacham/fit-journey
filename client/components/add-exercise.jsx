import React from 'react';

class AddExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setCount: 1,
      workoutId: this.props.workoutId,
      exerciseId: this.props.exerciseId
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.tagName === 'P') {
      this.setState({
        setCount: this.state.setCount + 1
      });
    }
  }

  renderForm() {
    return (
      <>
      <div className="col text-center">
        <p className="fs-2 gray-text">{this.state.setCount}</p>
      </div>
      <div className="col text-center">
        <input type="number" className="w-100 text-center gray-text fs-3 w-md-50 h-75 pop-in-colors"></input>
      </div>
      <div className="col text-center">
        <input type="number" className="w-100 text-center w-md-50 fs-3 gray-text h-75 pop-in-colors"></input>
      </div>
      </>
    );
  }

  render() {
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
      <form>
        <div className="row">
          <div className="col text-center">
            <p className="fs-2 gray-text">{this.state.setCount}</p>
          </div>
          <div className="col text-center">
            <input type="number" className="w-100 text-center gray-text fs-3 w-md-50 h-75 pop-in-colors"></input>
          </div>
          <div className="col text-center">
            <input type="number" className="w-100 text-center w-md-50 fs-3 gray-text h-75 pop-in-colors"></input>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <p className="fs-3 me-3 green-text" onClick={this.handleClick}>+Add another set</p>
        </div>
        <div className="text-center my-3">
          <button className="text-center px-4 fs-4 py-2 green-button">Add to Workout</button>
        </div>
      </form>
    </div>
    );
  }
}

export default AddExercise;
