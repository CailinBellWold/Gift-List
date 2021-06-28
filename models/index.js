const Recipient = require('./Recipient');
const User = require('./User');
const Gifts = require('./Gifts');

Recipient.hasMany(Gifts, {
  foreignKey: 'recipient_id',
});

Gifts.belongsTo(Recipient, {
  foreignKey: 'recipient_id',
});

module.exports = { User, Recipient, Gifts };
