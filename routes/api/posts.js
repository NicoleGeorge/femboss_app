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

router.get('/:id', auth, async (req, res) => {
  try {
    // sorting posts by the most recent post first
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msge: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msge: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});

// Delete user Posts workflow
// @route           DELETE api/posts/:id
// @description     Delete a Post
// @access          Private

router.delete('/:id', auth, async (req, res) => {
  try {
    // sorting posts by the most recent post first
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msge: 'Post not found' });
    }

    // ONLY the user who wrote the post, can delete their post
    // post.user is an object, not a string, like req.user.id is
    // therefore, need to use the toString() method to match them up

    if (post.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: 'user is not authorised to delete this post' });
    }

    await post.remove();

    res.json({ msg: 'Post successfully removed' });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msge: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});

// Like  a  user's Post workflow
// @route           PUT api/posts//like/:id
// @description     Like a Post
// @access          Private

router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //  check if a user has alrady like a post ==> so it doens't keep incrementing
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: 'Post has been liked' });
    }

    // .unshift() ==> pushes dsata to the top of the array
    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// unlike a  user's Post workflow
// @route           PUT api/posts/unlikelike/:id
// @description     Like a Post
// @access          Private

router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //  check if a user has alrady like a post ==> so it doens't keep incrementing
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: 'Post has not been liked' });
    }

    // get the remove index
    const deleteIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(deleteIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// user commenting on Posts workflow
// @route           POST api/posts/comment/:id
// @description     Comment on a Post
// @access          Private

router.post(
  '/comment/:id',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
