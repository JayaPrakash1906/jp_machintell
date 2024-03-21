const express = require('express');
const router = express.Router();
const viewassmunitteamController = require('../../controller/flcps-controller/factorylayer/assemblyunit/ViewassmunitteamController');
router.post('/', viewassmunitteamController);

module.exports = router;