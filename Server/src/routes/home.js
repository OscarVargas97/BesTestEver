const express = require('express');
const router = express.Router();
const home = require('../controller/home.controller')


router.get('/', home.home)
router.get('/home', home.home)


module.exports = router;