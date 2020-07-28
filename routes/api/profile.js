const express = require('express');
const router = express.Router();

// access workflow
// @route           GET api/profile
// @description     Test route
// @access          Public


router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;