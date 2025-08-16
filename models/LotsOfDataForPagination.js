const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import the Sequelize instance

const LotsOfDataForPagination = sequelize.define('LotsOfDataForPagination', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // You can add other fields here, such as createdAt, updatedAt, etc.
});

module.exports = { LotsOfDataForPagination };
