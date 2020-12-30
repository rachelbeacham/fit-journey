import React from 'react';

class AddExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setCount: 1
    };
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
          <p className="text-white">Weight (lbs)</p>
        </div>
      </div>
      <form>
        <div className="row">
          <div className="col text-center">
            <p className="fs-2 gray-text">{this.state.setCount}</p>
          </div>
          <div className="col text-center">
            <input type="number" className="w-100 w-md-50 h-75 pop-in-colors"></input>
          </div>
          <div className="col text-center">
            <input type="number" className="w-100 w-md-50 h-75 pop-in-colors"></input>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <p className="fs-3 me-3 green-text">+Add a set</p>
        </div>
        <div className="text-center my-3">
          <button onClick={this.props.handleClick} className="text-center px-4 fs-4 py-2 green-button">Add to Workout</button>
        </div>
      </form>
    </div>
    );
  }
}

export default AddExercise;
