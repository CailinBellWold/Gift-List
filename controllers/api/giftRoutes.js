const router = require('express').Router();
const { Gifts } = require('../../models');
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

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const giftData = await Gift.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
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
