const express = require('express')
const RickandMorty = require('../controllers/rickandmorty.controller')
const router = express.Router()

router.get('/answers', RickandMorty.answers)

module.exports = router
