
const sequelize = require('../config/connection');
const { User, Gift } = require('../models');

const userData = require('./userData.json');
const giftData = require('./giftData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });  
  process.exit(0);
};

seedDatabase();
