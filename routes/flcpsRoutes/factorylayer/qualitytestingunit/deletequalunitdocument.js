const express = require('express');
const router = express.Router();
const deletequalunitdocumentController = require('../../controller/flcps-controller/factorylayer/qualitytestingunit/deletequalunitdocumentsController');
router.delete('/:id', deletequalunitdocumentController);

module.exports = router;