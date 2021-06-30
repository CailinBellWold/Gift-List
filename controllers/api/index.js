const router = require('express').Router();
const userRoutes = require('./userRoutes');
const giftRoutes = require('./giftRoutes');

router.use('/users', userRoutes);
router.use('/gifts', giftRoutes);
