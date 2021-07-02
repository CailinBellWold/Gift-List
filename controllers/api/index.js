const router = require('express').Router();
const userRoutes = require('./userRoutes');
const giftRoutes = require('./giftRoutes');
// const homeRoutes = require('./homeRoutes');


router.use('/users', userRoutes);
router.use('/gifts', giftRoutes);
// router.use('/', homeRoutes);


module.exports = router;