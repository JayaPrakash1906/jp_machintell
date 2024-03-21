const express = require('express');
const router = express.Router();
const viewqualunitteamController = require('../../controller/flcps-controller/factorylayer/qualitytestingunit/ViewqualunitteamController');
router.post('/', viewqualunitteamController);

module.exports = router;