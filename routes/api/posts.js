const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Post = require('../../models/Post');

// user Posts workflow
// @route           POST api/posts
// @description     Create a Post
// @access          Private

router.post(
  '/',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const post = await newPost.save();

      res.json(post);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// get ALL user Posts workflow
// @route           GET api/posts
// @description     Get all Post
// @access          Private

router.get('/', auth, async (req, res) => {
  try {
    // sorting posts by the most recent post first
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route           GET api/posts
// @description     Get post by id
// @access          Private

router.get('/', auth, async (req, res) => {
    try {
      // sorting posts by the most recent post first
      const posts = await Post.find().sort({ date: -1 });
      res.json(posts);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });


module.exports = router;
