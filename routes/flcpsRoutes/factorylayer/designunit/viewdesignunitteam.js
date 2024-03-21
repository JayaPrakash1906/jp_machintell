const express = require('express');
const router = express.Router();
const viewdesignunitteamController = require('../../controller/flcps-controller/factorylayer/designunit/ViewdesignunitteamController');
router.post('/', viewdesignunitteamController);

module.exports = router;