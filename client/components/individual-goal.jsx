import React from 'react';

export default function Goal(props) {
  const { goalId, goalDescription, completed } = props.goal;
  const id = `goal-${goalId}`;
  const goalClass = completed
    ? 'form-check-label fs-4 mx-3 is-completed'
    : 'form-check-label fs-4 mx-3';
  return (
    <li>
      <div className="d-flex form-check align-items-center">
        <input id={id} type="checkbox" checked={completed}
          onChange={() => props.toggleCompleted(goalId)} />
        <label className={goalClass} htmlFor={id}>{goalDescription}</label>
      </div>
    </li>
  );
}
