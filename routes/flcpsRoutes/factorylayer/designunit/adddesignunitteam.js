const express = require('express');
const router = express.Router();
const adddesignunitteamController = require('../../controller/flcps-controller/factorylayer/designunit/adddesignunitteamController');
router.post('/', adddesignunitteamController);

module.exports = router;