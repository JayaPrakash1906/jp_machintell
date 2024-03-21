const express = require('express');
const router = express.Router();
const viewvendorunitteamController = require('../../controller/flcps-controller/factorylayer/vendormanagementunit/ViewvendorunitteamController');
router.post('/', viewvendorunitteamController);

module.exports = router;