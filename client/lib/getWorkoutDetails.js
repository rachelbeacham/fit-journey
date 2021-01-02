function exercises(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i].exerciseName)) {
      newArray.push(array[i].exerciseName);
    }
  }
  return newArray;
}

function sets(exercises, result) {
  let obj = {};
  const workoutExercises = {};
  exercises.forEach(exercise => {
    const sets = [];
    for (let i = 0; i < result.length; i++) {
      if (result[i].exerciseName === exercise) {
        obj = {
          reps: result[i].reps,
          weight: result[i].weight,
          setId: result[i].setId
        };
        sets.push(obj);
      }
      workoutExercises[exercise] = sets;
    }
  });
  return workoutExercises;
}

export { exercises, sets };
