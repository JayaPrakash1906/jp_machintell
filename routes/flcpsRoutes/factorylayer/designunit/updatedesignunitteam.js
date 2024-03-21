const express = require('express');
const router = express.Router();
const updatedesignunitteamController = require('../../controller/flcps-controller/factorylayer/designunit/updatedesignunitteamController');
router.put('/:id', updatedesignunitteamController);

module.exports = router;