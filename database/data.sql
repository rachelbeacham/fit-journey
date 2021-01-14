insert into "users" ("username")
values ('demoUser');

insert into "muscleGroups" ("muscleName")
values ('Arms'),
       ('Back'),
       ('Chest'),
       ('Core'),
       ('Legs'),
       ('Shoulders');

insert into "exercises" ("exerciseName", "demoImage", "howToDescription", "muscleGroupId")
values ('Barbell Bench Press', '/images/barbell-chest-press.jpeg', '1. Lie on the bench with you eyes under the bar.
2. Grab the bar with a medium grip-width (thumbs around the bar!).
3. Un-rack the bar by straightening your arms.
4. Lower the bar to your mid chest.
5. Press the bar back up until your arms are straight.', '3'),
        ('Barbell Squat', '/images/barbell_squat.png', '1. Stand with your feet roughly shoulder-width apart, toes pointing slightly out.
2. Keep your spine in alignment by looking at a spot on the floor about three feet in front of you
3. “Sit” back and down as if you are aiming for a chair.
4. Descend until your hip crease is below your knee.
5. Extend back up to starting position.', '5'),
        ('Barbell Deadlift', '/images/deadlift.jpg','1. Stand with your mid-foot under the barbell, feet shoulder distance apart.
2. Bend over and grab the bar with a shoulder-width grip.
3. Bend your knees until your shins touch the bar.
4. Lift your chest up and straighten your lower back.
5. Take a big breath, hold it, and stand up with the weight.
6. Return the weight to the floor by moving your hips back while bending your legs.
7. Keep lower back neutral to avoid injuries.','5'),
        ('Supinated Bent Over Row', '/images/bent-over-row.png', '1. Hold a barbell with a supinated grip (palms facing up).
2. Your feet should be shoulder-width apart. 
3. Bend your knees and bring your torso forward slightly.
4. Your back should be straight and almost parallel to the floor.
5. This is your starting position. Lift the barbell up towards your sternum, keeping your elbows tucked in and close to the body. 
6. Pause and hold at the top of the movement, squeezing your back muscles. 
7. Slowly lower the barbell back to the starting position.', '2'),
        ('Arnold Press', '/images/arnold-press.jpg', '1. Stand with feet hip distance apart holding dumbbells at shoulder height with arms tight to the body, and palms facing in.
2. Rotate wrists out(palms facing out now) and extend your arms overhead.
3. Rotate back and return to start with control', '6'),
        ('Barbell Curl', '/images/barbell-curl.jpg', '1. Stand tall with shoulder blades pulled back and down the back, chest up, and grip the bar with palms facing away from the body shoulder distance apart.
2. Contract your biceps to curl the weight forward, upper arms should remain stationary.
3. Continue moving the barbell until the biceps are fully contracted and the bar is at shoulder height.
4. Hold this position for a second and squeeze your biceps.
5. Lower the barbell back to starting position with control', '1'),
        ('Upright Row', '/images/upright-row.jpg', '1. Stand upright with feet shoulder width apart.
2. Grasp a barbell with your palms facing downward and your hands closer than shoulder width apart.
3. Keep your arms extended downward with your elbows slightly bent so that the barbell is touching your upper legs, this is your starting position.
4. Keeping the barbell close to your body, exhale and raise the barbell straight up to your chest.
5. Hold for a moment and then reverse the motion back to the starting position.', '6'),
        ('Russian Twist', '/images/russian-twist.png', '1. Sit down and hold a weight with both hands.
2. Hold your feet a few inches off the ground with your knees slightly bent.
3. Lean back slightly to where you have to hold yourself up with your abs.
4. Twist your torso and bring the weight to the same side you twisted towards.
5. Twist to the opposite side and repeat both sides for the desired amount of reps.', '4'),
        ('Cable Fly', '/images/cable-fly.png', '1. Place the cable fly handles on the notches at roughly shoulder height.
2. Take a handle in each hand.
3. Step one foot forward so that your feet are in a staggered stance.
4. With your elbows slightly bent pull the handles forward and together meeting in the center of your chest.
5. Bring your hands back to starting position. This completes one repetition.', '3'),
        ('Skull Crusher', '/images/skull-crusher.jpg', '1. Lie on your back on a flat bench. Hold a barbell or EZ bar over your chest with your arms fully extended, hands shoulder distance apart.
2. Lower the bar by bending at the elbows, keep lowering the bar until your forearms are perpendicular to the floor (upper arms should be stationary).
3. Bring the bar back up to the starting position, contract your triceps when you get to the top of the movement.', '1'),
        ('Lat Pulldown', '/images/lat-pulldown.png', '1. Place your knees under the provided pads. Position the pads so that your thighs are not able to raise up off the bench.
2. Grasp the lat bar with a little wider than shoulder-width grip. This is the starting position.
3. Begin exercise by pulling the bar down to your upper chest. Focus on using your lats to pull the bar down and not your arms.
4. Reverse movement back to starting position with control.', '2'),
        ('Plank', '/images/plank.jpg', '1. Assume a standard push-up position. Except instead of resting your weight on your hands, place your elbows and forearms flat on the floor.
2. Begin exercise by raising hips so that your entire body from your heels to your head is in a straight line. Hold this position for at least 30 seconds. Brace your core and breath deeply throughout hold.', '4'),
        ('Dumbbell Lunge', '/images/dumbbell-lunge.jpg', '1. Grab a dumbbell in each hand and hold them at the side of the body with arms straight.
2. Step forward until front leg thigh is parallel with the ground and back leg knee is 1-2 inches from the ground.
3. Step back to return to starting position and repeat movement with other leg to complete the repetition.', '5'),
        ('One-Arm Dumbbell Row', '/images/one-arm-dumbbell-row.jpg', '1. With a dumbbell on each side of a flat bench, place your right hand and your right knee on the flat bench.
2. With a straight back and your stomach parallel to the weight bench, grasp the left hand side dumbbell with your left hand, palm facing towards you.
3. Exhaling, bring the dumbbell straight up to your chest by bending the elbow back to a 90 degree angle.
4. Inhaling, lower the dumbbell until your arm is straight down and your elbow has only a slight bend.
5. Repeat for a full set of repetitions and then switch sides', '2'),
        ('Dumbbell Shrug', '/images/dumbbell-shrugs.jpg', '1. Stand up straight with a dumbbell in each hand. Your palms should be facing your torso, with your arms extended to your sides.
2. Raise the dumbbells by lifting your shoulders as high as possible, exhaling as you do so. Hold the contraction at the top for a second.
3. Bring the dumbbells back to the starting position.
4. Repeat for the number of reps in your set.' , '6'),
        ('Dumbbell Shoulder Press', '/images/dumbbell-shoulder-press.jpeg', '1. Grab a pair of dumbbells and hold them at your side.
2. Bring dumbbells up so that they are out in front of your shoulders and your palms are facing out. This is the starting position.
3. Begin exercise by pushing dumbbells up over your head until your arms are almost straight. Lower back down to the starting position and repeat.
4. Perform standing or seated' , '6'),
        ('Tricep Pushdown', '/images/tricep-pushdown.jpg', '1. Feet shoulder width apart, face a high pulley machine with an attached bar at shoulder level height and grasp it with your palms facing down. Hold the bar close to your chest for your starting position.
2. Keeping your body stationary, exhale as you lower the bar by completely extending your arms downward until the bar touches your thighs.
3. Hold for a moment and then inhale as you slowly return the bar to shoulder level.', '1'),
        ('Pull Ups', '/images/pull-ups.jpg', '1. Grab onto the bar with your hands 6-8 inches wider than shoulder width apart.
2. Hang by your arms and then pull yourself all the way up so that your chin goes over the bar.
3. Lower yourself all the way down.
4. Repeat this motion for the desired amount of repetitions.', '2')
