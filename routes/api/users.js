const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
// user schema
const User = require('../../models/User');
// gravatar npm package
const gravatar = require('gravatar');
// bcrypt
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
// const expressJwt = require('express-jwt');
const dotenv = require('dotenv');
// require('dotenv').config();
dotenv.config();

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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ error: [{ msg: 'User already exists' }] });
      }

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });
      // creating a new user
      user = new User({
        name,
        email,
        avatar,
        password,
      });

      //  hashing password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      //   saving user to db

      await user.save();

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
