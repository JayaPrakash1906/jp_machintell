const express = require('express');
const router = express.Router();
const addqualunitteamController = require('../../controller/flcps-controller/factorylayer/qualitytestingunit/addqualunitteamController');
router.post('/', addqualunitteamController);

module.exports = router;