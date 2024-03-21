const express = require('express');
const router = express.Router();
const viewqualunitdocumentController = require('../../controller/flcps-controller/factorylayer/qualitytestingunit/ViewqualunitdocumentController');
router.post('/', viewqualunitdocumentController);

module.exports = router;