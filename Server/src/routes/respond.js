const express = require('express');
const router = express.Router();
const ApiRespond = require('../controller/respond.controller')

router.get('/', ApiRespond.query)
router.get('/bestestever', ApiRespond.allName)


module.exports = router;