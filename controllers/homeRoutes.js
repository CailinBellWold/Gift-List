const router = require('express').Router();
const { Gifts: Gift, User } = require('../models');
const { update } = require('../models/User');
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

router.get('/updateGift/:id', async (req, res) => {
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

    res.render('updateGift', {
      gift,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

