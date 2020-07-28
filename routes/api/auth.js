const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
// access workflow
// @route           GET api/auth
// @description     Test route
// @access          Public

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// user access workflow
// @route           POST api/auth
// @description     Authenticate user + get token
// @access          Public

router.post(
  '/',
  [
    check('email', 'Please enter a valid email address').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: [{ msg: 'Invalid credentials' }] });
      }

      //   match the user's email and password

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      //   jwt

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      //   res.send('User registered');
    } catch (error) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
    // console.log(req.body);
  }
);


module.exports = router;
