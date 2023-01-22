const sequelize = require("sequelize");
const db = require("../db");

const Retailer = db.define("retailers", {
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

Retailer.sync()
  .then(() => console.log("Retailer Table Synced Succesfull"))
  .catch((err) => console.log("err:", err));
module.exports = Retailer;
