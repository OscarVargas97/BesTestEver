const express = require('express')
const router = express.Router()

router.get('*', (req, res) => {
  res.status(404).send('No se encontrĂ³ tu pagina')
})

module.exports = router
