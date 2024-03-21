const express = require('express');
const router = express.Router();
const deleteassmunitteamController = require('../../controller/flcps-controller/factorylayer/assemblyunit/deleteassmunitteamController');
router.delete('/:id', deleteassmunitteamController);

module.exports = router;