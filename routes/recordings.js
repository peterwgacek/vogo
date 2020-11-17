// Require express module
const express = require('express');

// Set up router object
const router = express.Router();

// Require controller module (index controller)
const recordingsCtrl = require('../controllers/recordings');

// Define routes
router.get('/', recordingsCtrl.index);

router.get('/new', recordingsCtrl.new);

router.post('/', recordingsCtrl.create);

// Export router object
module.exports = router;