import React from 'react';

class ExerciseDetail extends React.Component {
  render() {
    return (
      <div className="w-75 mt-5 container pop-out-colors">
        <h3 className="mt-3 text-center text-white">Barbell Bench Press</h3>
        <div className="text-center">
          <img className="w-75" src="images/barbell-chest-press.jpeg" alt="demo image"></img>
        </div>
        <h4 className="mt-3 text-center text-white">How To:</h4>
        <p className="text-white text-md-center text-left">
          1. Lie on the bench with you eyes under the bar. <br />
          2. Grab the bar with a medium grip-width (thumbs around the bar!) <br />
          3. Unrack the bar by straigtenting your arms. <br />
          4. Lower the bar to your mid chest. <br />
          5. Press the bar back up until your arms are straight. <br />
        </p>
        <div className="text-center">
          <button className="text-center white-text my-3">Done</button>
        </div>
      </div>
    );
  }
}

export default ExerciseDetail;
