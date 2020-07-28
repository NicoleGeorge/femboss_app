const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// access workflow
// @route           GET api/auth
// @description     Test route
// @access          Public


router.get('/', auth, (req, res) => res.send('Auth route'));

module.exports = router;