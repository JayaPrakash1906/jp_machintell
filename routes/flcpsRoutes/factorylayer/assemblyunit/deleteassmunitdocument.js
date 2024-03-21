const express = require('express');
const router = express.Router();
const deleteassmunitdocumentController = require('../../controller/flcps-controller/factorylayer/assemblyunit/deleteassmunitdocumentsController');
router.delete('/:id', deleteassmunitdocumentController);

module.exports = router;