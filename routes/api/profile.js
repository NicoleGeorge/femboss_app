const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// access workflow
// @route           GET api/profile/me ==> based on the user id from the token
// @description     GET current user's profile
// @access          Private

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'This user does not have a profile' });
    }

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// access workflow
// @route           POST api/profile==> based on the user id from the token
// @description     Create or update a user profile
// @access          Private

router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required').not().isEmpty(),
      check('skills', 'Skills is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      company,
      website,
      location,
      bio,
      status,
      githubusername,
      skills,
      instagram,
      linkedin,
      youtube,
      twitter,
      facebook,
    } = req.body;

    //   Creating profile object

    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {
      profileFields.skills = skills.split(',').map((skill) => skill.trim());
    }

    // Creaste socials object
    profileFields.socials = {};
    if (instagram) profileFields.socials.instagram = instagram;
    if (linkedin) profileFields.socials.linkedin = linkedin;
    if (youtube) profileFields.socials.youtube = youtube;
    if (twitter) profileFields.socials.twitter = twitter;
    if (facebook) profileFields.socials.facebook = facebook;

    // console.log(profileFields.skills); - working...woot-woot
    // res.send('Hello, '); working!!

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //updating user profile
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      //create user profile
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// access workflow
// @route           GET api/profile==> based on the user id from the token
// @description     Get all user profile
// @access          Public

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// access workflow
// @route           GET api/profile/:user_id
// @description     Get user profile by iserid
// @access          Public

router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.find({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar']);

    if (!profile)
      return res.status(400).json({ msg: 'This user does not have a profile' });

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    if (error.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// access workflow
// @route           DELETE api/profile ==> based on the user id from the token
// @description     Delete a user profile, user and posts
// @access          Private

router.delete('/', auth, async (req, res) => {
  try {
    //   TODO ==> remove a user's posts

    // removing a user profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // remove the user
    await User.findByIdAndRemove({ _id: req.user.id });
    res.json({ msg: 'User has now been deleted.' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// access workflow
// @route           PUT api/profile/experience ==> based on the user id from the token
// @description     Add profile experiences
// @access          Private

router.put(
  '/experience',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('company', 'Company is required').not().isEmpty(),
      check('from', 'From date is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description,
    } = req.body;

    const newExperience = {
      title,
      company,
      location,
      from,
      to,
      current,
      description,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.experience.unshift(newExperience);

      await profile.save();

      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
