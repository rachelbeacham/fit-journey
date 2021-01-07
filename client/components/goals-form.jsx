import React from 'react';

export default class GoalsForm extends React.Component {
  render() {
    return (
      <div className="row mt-3">
        <form>
          <label htmlFor="goals" className="text-white fs-3 me-3">Goals:</label>
          <input type="text" placeholder="Add a new goal" className="gray-text ps-3 w-50 me-3 pop-in-colors"></input>
          <button type="submit" className="green-button py-1 px-3">ADD</button>
        </form>
      </div>
    );
  }
}
