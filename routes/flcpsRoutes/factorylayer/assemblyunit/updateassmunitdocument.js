const express = require('express');
const router = express.Router();
const updatemanfunitdocumentController = require('../../controller/flcps-controller/factorylayer/assemblyunit/updateassmunitdocumentController');
router.put('/:id', updatemanfunitdocumentController);

module.exports = router;