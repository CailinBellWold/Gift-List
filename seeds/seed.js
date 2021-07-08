const sequelize = require('../config/connection');
const { User, Gifts } = require('../models');

const userData = require('./user-seed.json');
const giftData = require('./gifts-seed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  // we need to use bcrypt each userData.password
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Gifts.bulkCreate(giftData);

  process.exit(0);

};

seedDatabase();