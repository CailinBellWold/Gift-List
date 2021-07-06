const router = require('express').Router();
// If you want to refer to it as Gift instead of Gifts, this will do the trick ...
const { Gifts: Gift } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newGift = await Gift.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGift);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {  
  try {
    const giftData = await Gift.findByPk(req.params.id, {
      where: {
        user_id: req.session.user_id,
      },
    });

    const gift = giftData.get({ plain: true });

    res.render("updateGift", {
      gift,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT route to update the users gift
router.put('/:id', withAuth, async (req, res) => {
  // update a category by its `id` value
  try {
    const giftName = await Gift.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(giftName);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const giftData = await Gift.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!giftData) {
      res.status(404).json({ message: 'No item(s) found with this id!' });
      return;
    }

    res.status(200).json(giftData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
