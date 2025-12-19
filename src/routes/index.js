const express = require('express');
const router = express.Router();
const { getHome, postData } = require('../controllers/controller');

// Routes
router.get('/', getHome);
router.post('/data', postData);

module.exports = router;
