set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "exercises" (
	"exerciseId" serial NOT NULL,
	"exerciseName" TEXT NOT NULL,
	"demoImage" TEXT NOT NULL,
	"howToDescription" TEXT NOT NULL,
	"muscleGroupId" integer NOT NULL,
	CONSTRAINT "exercises_pk" PRIMARY KEY ("exerciseId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "muscleGroups" (
	"muscleGroupId" serial NOT NULL,
	"muscleName" TEXT NOT NULL,
	CONSTRAINT "muscleGroups_pk" PRIMARY KEY ("muscleGroupId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Users" (
	"userId" serial NOT NULL,
	"userName" TEXT,
	"currentWeight" integer,
	"profilePictureUrl" TEXT,
	"username" TEXT,
	"hashedPassword" TEXT,
	"userEmail" TEXT,
	CONSTRAINT "Users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "workouts" (
	"workoutId" serial NOT NULL,
	"userId" integer NOT NULL,
	"workoutDate" DATE NOT NULL,
	"workoutDuration" TEXT NOT NULL,
	CONSTRAINT "workouts_pk" PRIMARY KEY ("workoutId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "routines" (
	"routineId" serial NOT NULL,
	"userId" integer NOT NULL,
	"routineName" TEXT NOT NULL,
	CONSTRAINT "routines_pk" PRIMARY KEY ("routineId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "sets" (
	"setId" serial NOT NULL,
	"reps" integer NOT NULL,
	"weight" integer NOT NULL,
	CONSTRAINT "sets_pk" PRIMARY KEY ("setId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "exerciseSets" (
	"workoutId" integer NOT NULL,
	"exerciseId" integer NOT NULL,
	"setId" integer NOT NULL,
	CONSTRAINT "exerciseSets_pk" PRIMARY KEY ("setId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "routineExercises" (
	"routineId" integer NOT NULL,
	"routineExerciseName" TEXT NOT NULL,
	"routineReps" integer NOT NULL,
	"routineSets" integer NOT NULL,
	CONSTRAINT "routineExercises_pk" PRIMARY KEY ("routineId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "progressPhotos" (
	"photoId" serial NOT NULL,
	"url" TEXT NOT NULL,
	"caption" TEXT NOT NULL,
	"userId" integer NOT NULL,
	"photoDate" DATE NOT NULL,
	CONSTRAINT "progressPhotos_pk" PRIMARY KEY ("photoId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "favorites" (
	"favoriteId" serial NOT NULL,
	"exerciseId" integer NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "favorites_pk" PRIMARY KEY ("favoriteId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "goals" (
	"goalId" serial NOT NULL,
	"goalDescription" TEXT NOT NULL,
	"userId" integer NOT NULL,
	"completed" BOOLEAN NOT NULL,
	CONSTRAINT "goals_pk" PRIMARY KEY ("goalId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "customWorkouts" (
	"workoutId" integer NOT NULL,
	"customWorkoutName" TEXT,
	"type" TEXT NOT NULL,
	CONSTRAINT "customWorkouts_pk" PRIMARY KEY ("workoutId")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "exercises" ADD CONSTRAINT "exercises_fk0" FOREIGN KEY ("muscleGroupId") REFERENCES "muscleGroups"("muscleGroupId");



ALTER TABLE "workouts" ADD CONSTRAINT "workouts_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("userId");

ALTER TABLE "routines" ADD CONSTRAINT "routines_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("userId");


ALTER TABLE "exerciseSets" ADD CONSTRAINT "exerciseSets_fk0" FOREIGN KEY ("workoutId") REFERENCES "workouts"("workoutId");
ALTER TABLE "exerciseSets" ADD CONSTRAINT "exerciseSets_fk1" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("exerciseId");
ALTER TABLE "exerciseSets" ADD CONSTRAINT "exerciseSets_fk2" FOREIGN KEY ("setId") REFERENCES "sets"("setId");

ALTER TABLE "routineExercises" ADD CONSTRAINT "routineExercises_fk0" FOREIGN KEY ("routineId") REFERENCES "routines"("routineId");

ALTER TABLE "progressPhotos" ADD CONSTRAINT "progressPhotos_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("userId");

ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk0" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("exerciseId");
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk1" FOREIGN KEY ("userId") REFERENCES "Users"("userId");

ALTER TABLE "goals" ADD CONSTRAINT "goals_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("userId");

ALTER TABLE "customWorkouts" ADD CONSTRAINT "customWorkouts_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("userId");
