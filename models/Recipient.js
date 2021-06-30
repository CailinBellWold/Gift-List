// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Recipient extends Model {}

// Recipient.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     first_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     last_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     max_budget: {
//       type: DataTypes.DECIMAL (10,2),
//       allowNull: false,
//       validate: {
//         isDecimal: true
//       }
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'recipient',
//   }
// );

// module.exports = Recipient;
