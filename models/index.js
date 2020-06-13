const mongoose = require('mongoose');

//define schemes
const workoutSchema = new mongoose.Schema(
  {
    day: {
      type: Date,
      default: () => new Date(), //set a default value of this schema
    },
    exercises: [
      {
        type: { type: String, trim: true, required: true }, //trim:true It's basically there to ensure the strings you save through the schema are properly trimmed

        name: { type: String, trim: true, required: true },
        duration: { type: Number, required: true },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual('totalDuration').get(function () {
  // reduce to get just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

module.exports = { Workout: mongoose.model('Workout', workoutSchema) };
