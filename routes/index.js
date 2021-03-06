// Require express module
const express = require('express');

// Set up router object
const router = express.Router();

// Require controller module (index controller)
const indexCtrl = require('../controllers/index');


// Define routes
router.get('/', indexCtrl.index);

// Export router object
module.exports = router;