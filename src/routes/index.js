const express = require ('express');
const router = express.Router();

//Here add all routes
router.use(require("./user"))


module.exports = router;