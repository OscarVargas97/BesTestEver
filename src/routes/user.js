const express = require ('express');
const router = express.Router();
const controller = require('../controller/user.controller');

router.get('*',(req, res) =>{
    res.status(404).send('error!')
});

module.exports = router;