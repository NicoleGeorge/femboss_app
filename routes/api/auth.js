const express = require('express');
const router = express.Router();

// access workflow
// @route           GET api/auth
// @description     Test route
// @access          Public


router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;