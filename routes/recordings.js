// Require express module
const express = require('express');

// Set up router object
const router = express.Router();

// Require controller module (index controller)
const recordingsCtrl = require('../controllers/recordings');

// Define routes
router.get('/', recordingsCtrl.index);

router.get('/new', recordingsCtrl.new);

router.get('/:id/show', recordingsCtrl.show);

router.delete('/:id', recordingsCtrl.delete);

router.put('/:id/', recordingsCtrl.update);

router.post('/', recordingsCtrl.create);

router.get('/:id/edit', recordingsCtrl.edit);


// Export router object
module.exports = router;