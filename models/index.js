const mongoose = require('mongoose');

//define schemes
const workoutSchema = new mongoose.Schema({
  day: Date,
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

module.exports = { Workout: mongoose.model('Workout', workoutSchema) };
