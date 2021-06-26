const Recipient = require('./Recipient');
const User = require('./User');
const WishListItem = require('./WishListItem');

Recipient.hasMany(WishListItem, {
  foreignKey: 'recipient_id',
});

WishListItem.belongsTo(Recipient, {
  foreignKey: 'recipient_id',
});

module.exports = { User, Recipient, WishListItem };
