const express = require('express');
const router = express.Router();
const updatequalunitteamController = require('../../controller/flcps-controller/factorylayer/qualitytestingunit/updatequalunitteamController');
router.put('/:id', updatequalunitteamController);

module.exports = router;