const express = require('express');
const router = express.Router();
const deletvendorunitdocumentController = require('../../controller/flcps-controller/factorylayer/vendormanagementunit/deletevendorunitdocumentsController');
router.delete('/:id', deletevendorunitdocumentController);

module.exports = router;