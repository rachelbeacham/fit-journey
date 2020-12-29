import React from 'react';

class ExerciseDetail extends React.Component {
  render() {
    return (
    <div className="w-75 my-5 container pop-out-colors">
      <h3 className="my-3 text-center text-white">{this.props.name}</h3>
      <div className="text-center">
        <img className="w-75" src={this.props.image} alt="demo image"></img>
      </div>
      <h4 className="mt-3 text-center text-white">How To:</h4>
      <p className="white-space text-white text-md-center text-left">
        {this.props.howTo}
      </p>
      <div className="text-center my-3">
        <button onClick={this.props.handleClick} className="text-center px-4 fs-4 py-2 green-button">Done</button>
      </div>
    </div>
    );
  }
}

export default ExerciseDetail;
