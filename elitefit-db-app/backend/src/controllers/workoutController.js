const Workout = require('../models/workout');

// Add a new workout
exports.addWorkout = async (req, res) => {
    try {
        const { exercise, sets, reps, duration } = req.body;
        const newWorkout = new Workout({
            exercise,
            sets,
            reps,
            duration,
            user: req.user.id // Assuming user ID is available in req.user
        });

        await newWorkout.save();
        res.status(201).json({ message: 'Workout added successfully!', workout: newWorkout });
    } catch (error) {
        res.status(500).json({ message: 'Error adding workout', error: error.message });
    }
};

// Get all workouts for a user
exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({ user: req.user.id });
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving workouts', error: error.message });
    }
};

// Update a workout
exports.updateWorkout = async (req, res) => {
    try {
        const { workoutId } = req.params;
        const updatedWorkout = await Workout.findByIdAndUpdate(workoutId, req.body, { new: true });

        if (!updatedWorkout) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        res.status(200).json({ message: 'Workout updated successfully!', workout: updatedWorkout });
    } catch (error) {
        res.status(500).json({ message: 'Error updating workout', error: error.message });
    }
};

// Delete a workout
exports.deleteWorkout = async (req, res) => {
    try {
        const { workoutId } = req.params;
        const deletedWorkout = await Workout.findByIdAndDelete(workoutId);

        if (!deletedWorkout) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        res.status(200).json({ message: 'Workout deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting workout', error: error.message });
    }
};