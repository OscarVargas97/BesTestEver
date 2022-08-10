const express = require('express');
const router = express.Router();
const users = require('../controller/user.controller');

router.get('/', users.list);
router.post('/', users.create);

module.exports = router;