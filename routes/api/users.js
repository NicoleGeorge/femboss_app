const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// user access workflow
// @route           POST api/users
// @description     Register user
// @access          Public

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email address').isEmail(),
    check(
      'password',
      'Please enter a password with 8 or more characters'
    ).isLength({ min: 8 }),
  ],
  (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ error: errors.array() });
      }
    // console.log(req.body);
    res.send('User route');
  }
);

module.exports = router;
