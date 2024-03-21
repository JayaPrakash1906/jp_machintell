const express = require('express');
const router = express.Router();
const deletevendorunitteamController = require('../../controller/flcps-controller/factorylayer/vendormanagementunit/deletevendorunitteamController');
router.delete('/:id', deletevendorunitteamController);

module.exports = router;