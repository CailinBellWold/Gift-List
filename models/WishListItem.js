const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WishListItem extends Model {}

WishListItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    already_purchased: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    recipient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'recipient',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'WishListItem',
  }
);

module.exports = WishListItem;
