const express = require('express');
const router = express.Router();
const deletequalunitteamController = require('../../controller/flcps-controller/factorylayer/qualitytestingunit/deletequalunitteamController');
router.delete('/:id', deletequalunitteamController);

module.exports = router;