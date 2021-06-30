const router = require('express').Router();
const { Gifts, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => { //goes to userlanding
  try {
    const giftData = await Gift.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const gifts = giftData.map((gift) => gift.get({ plain: true }));
    
    // Pass serialized data and session flag into template //move this code over to userlanding.handlebars?
    res.render('userlanding', { 
      gifts, 
      logged_in: req.session.logged_in 
    });
    } catch (err) {
    res.status(500).json(err);
    }
    });

router.get('/gifts/:id', async (req, res) => {
  try {
    const giftData = await Gift.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
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
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: User }],
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
