const router = require('express').Router()
module.exports = router

router.use('/diagnoses', require('./diagnoses'))
