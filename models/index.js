const Recipient = require('./Recipient');
const User = require('./User');
const Gifts = require('./Gifts');

User.hasMany(Gifts, {
  foreignKey: 'user_id',
});

Gifts.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Gifts };
