const express = require('express');
const router = express.Router();

// access workflow
// @route           GET api/posts
// @description     Test route
// @access          Public


router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;