const sequelize = require("sequelize");
const db = require("../db");

const Company = db.define("company", {
  id: {
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  log: {
    type: sequelize.STRING,
    allowNull: false,
  },
  start_year: {
    type: sequelize.STRING,
    allowNull: false,
  },

  tin_number: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

Company.sync()
  .then(() => console.log("Company Table Synced Succesfull"))
  .catch((err) => console.log("err:", err));

module.exports = Company;
