const express = require('express');
const router = express.Router();
const deletedesignunitdocumentController = require('../../controller/flcps-controller/factorylayer/designunit/deletedesignunitdocumentsController');
router.delete('/:id', deletedesignunitdocumentController);

module.exports = router;