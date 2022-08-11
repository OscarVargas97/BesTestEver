const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');

router.get('*', (req, res) => {
	res.status(404).send('No se encontró tu pagina');
});

module.exports = router;