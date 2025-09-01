const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

// Route to create a new workout
router.post('/', workoutController.createWorkout);

// Route to get all workouts for a user
router.get('/:userId', workoutController.getUserWorkouts);

// Route to update a workout by ID
router.put('/:id', workoutController.updateWorkout);

// Route to delete a workout by ID
router.delete('/:id', workoutController.deleteWorkout);

module.exports = router;