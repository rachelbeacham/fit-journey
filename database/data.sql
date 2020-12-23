insert into "muscleGroups" ("muscleName")
values ('arms'),
       ('back'),
       ('chest'),
       ('core'),
       ('legs'),
       ('shoulders');

insert into "exercises" ("exerciseName", "demoImage", "howToDescription", "muscleGroupId")
values ('Barbell Bench Press', '/images/bench_press.jpg', 'Lie on the bench with you eyes under the bar.
Grab the bar with a medium grip-width (thumbs around the bar!)
Unrack the bar by straigtenting your arms.
Lower the bar to your mid chest.
Press the bar back up until your arms are straight.', '3'),
        ('Barbell Squat', '/images/barbell_squat.png', 'Stand with your feet roughly shoulder-width apart, toes pointing slightly out.
Keep your spine in alignment by looking at a spot on the floor about three feet in front of you
“Sit” back and down as if you are aiming for a chair.
Descend until your hip crease is below your knee.
Extend back up to starting position.', '5');
