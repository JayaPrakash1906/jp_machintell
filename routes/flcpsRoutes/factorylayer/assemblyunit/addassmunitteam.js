const express = require('express');
const router = express.Router();
const addmanfunitteamController = require('../../controller/flcps-controller/factorylayer/assemblyunit/addassmunitteamController');
router.post('/', addmanfunitteamController);

module.exports = router;