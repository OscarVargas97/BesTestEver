const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');

router.get('*', (req, res) => {
    res.status(404).send('error!');
});

module.exports = router;