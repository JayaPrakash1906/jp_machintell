const express = require('express');
const router = express.Router();
const viewvendorunitdocumentController = require('../../controller/flcps-controller/factorylayer/vendormanagementunit/ViewvendorunitdocumentController');
router.post('/', viewvendorunitdocumentController);

module.exports = router;