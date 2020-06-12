const router = require('express').Router();
const db = require('../models');

// GET all workouts
router.get('/workouts', (req, res) => {
  db.Workout.find()
    .then((workouts) => res.json(workouts))
    .catch((err) => console.error(err));
});

// // GET all workouts
// router.get('/workouts/range', (req, res) => {
//   db.Workout.findOne({}, { duration: { $gt: 10 } })
//     .then((workouts) => res.json(workouts))
//     .catch((err) => console.error(err));
// });

// // GET one workout
// router.get('/workouts/:id', (req, res) => {
//   db.Workout.findById(req.params.id)
//     .then((workout) => res.json(workout))
//     .catch((err) => console.error(err));
// });

// POST one workout
router.post('/workouts', (req, res) => {
  db.Workout.create(req.body)
    .then((workout) => res.json(workout))
    .catch((err) => console.error(err));
});

// PUT one workout
router.put('/workouts/:id', (req, res) => {
  db.Workout.update({ _id: req.params.id }, { $set: { header } })
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});

// DELETE one workout
router.delete('/workouts/:id', (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});

module.exports = router;
