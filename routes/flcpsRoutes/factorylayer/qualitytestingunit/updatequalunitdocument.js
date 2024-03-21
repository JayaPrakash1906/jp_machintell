const express = require('express');
const router = express.Router();
const updatequalunitdocumentController = require('../../controller/flcps-controller/factorylayer/qualitytestingunit/updatequalunitdocumentController');
router.put('/:id', updatequalunitdocumentController);

module.exports = router;