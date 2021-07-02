const router = require('express').Router();
const { Gifts: Gift, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/userlanding');
    return;
  }

  res.render('login');
});

// Use withAuth middleware to prevent access to route
router.get('/userlanding', withAuth, async (req, res) => {
  try {
    const giftData = await Gift.findAll({
      include: [
        {
          model: User,
          attributes: ['id'], // There's no 'name' attribute, correct?
        },
      ],
    });

    // Serialize data so the template can read it
    const gifts = giftData.map((gift) => gift.get({ plain: true }));
    
    // Pass serialized data and session flag into template 
    res.render('userlanding', { 
      gifts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: This shows /newGift, but you would think someone had to be authenticated
router.get('/newGift', async (req, res) => {
  console.log('GET /newGift route called:\n', JSON.stringify(req.session, null, 2));
  res.render('newGift');
});

router.get('/gifts/:id', async (req, res) => {
  try {
    const giftData = await Gift.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['email'],
        },
      ],
    });

    const gift = giftData.get({ plain: true });

    res.render('gift', {
      ...gift,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/userlanding', withAuth, async (req, res) => {
  console.log('get /userlanding called');
  console.log('req.params:\n', JSON.stringify(req.params, null, 2));
  console.log('req.session:\n', JSON.stringify(req.session, null, 2));
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      // attributes: { exclude: ['password'] },
      // include: [{ model: User }], ... that will come by default.
    });

    const user = userData.get({ plain: true });

    res.render('userlanding', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/userlanding');
    return;
  }

  res.render('login');
});
  
module.exports = router;
