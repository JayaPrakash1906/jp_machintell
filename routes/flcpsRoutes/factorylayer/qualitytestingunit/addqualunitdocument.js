const express = require('express');
const router = express.Router();
const addqualunitdocumentController = require('../../controller/flcps-controller/factorylayer/qualitytestingunit/addqualunitdocumentController');
router.post('/', addqualunitdocumentController);

module.exports = router;
