const router = require('express').Router()

router.use('/api', require('./workoutRouter.js'))

module.exports = router
