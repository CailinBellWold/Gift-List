const sequelize = require('../config/connection');
const { User, Gifts, Recipient } = require('../models');

// TODO: Make sure these path names match what are supplied by others.
const userData = require('./user.json');
const giftData = require('./gifts-seed.json');
const recipientData = require('./recipient.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // We had to pass individualHooks: true here because
  // we need to use bcrypt each userData.password ...
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Assuming we don't need to do anything extra as we create each recipient ...
  await Recipient.bulkCreate(recipientData);
  await Gifts.bulkCreate(giftData);

  process.exit(0);
};

seedDatabase();