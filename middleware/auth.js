const jwt = require('jsonwebtoken');
const config = require('config');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
// const dotenv = require('dotenv');
// // require('dotenv').config();
// dotenv.config();

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');

  // check if there is a token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorisation denied' });
  }

  // verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'invalid Token' });
  }
};

