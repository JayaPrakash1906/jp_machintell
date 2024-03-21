const express = require('express');
const router = express.Router();
const updateassmunitteamController = require('../../controller/flcps-controller/factorylayer/assemblyunit/updateassmunitteamController');
router.put('/:id', updateassmunitteamController);

module.exports = router;