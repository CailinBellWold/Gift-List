const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gifts extends Model {}

Gifts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipientName: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purchased: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // Part of Stretch Goal
    // item_price: {
    //   type: DataTypes.DECIMAL (10,2),
    //   allowNull: false,
    //   validate: {
    //     isDecimal: true
    //   }
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Gifts',
  }
);

module.exports = Gifts;
