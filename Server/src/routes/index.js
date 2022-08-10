const express = require('express');
const router = express.Router();

//Here add all routes
router.use('/', require('./errors'))
router.use('/', require('./home'))
router.use('/user', require('./user'))
router.use('/respond', require('./respond'))

module.exports = router;