const sequelize = require("sequelize");
const db = require("../db");

const Wholesaler = db.define("wholesalers", {
  id: {
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },

  tin_number: {
    type: sequelize.STRING,
    allowNull: false,
  },
  active: {
    type: sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

Wholesaler.sync()
  .then(() => console.log("Wholesaler Table Synced Succesfull"))
  .catch((err) => console.log("err:", err));
  
module.exports = Wholesaler;
