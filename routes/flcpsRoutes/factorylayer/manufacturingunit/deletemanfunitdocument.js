const express = require('express');
const router = express.Router();
const deletemanfunitdocumentController = require('../../controller/flcps-controller/factorylayer/manufacturingunit/deletemanfunitdocumentsController');
router.delete('/:id', deletemanfunitdocumentController);

module.exports = router;