const sequelize = require("sequelize");
const db = require("../db");

const Importer = db.define("importers", {
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

Importer.sync()
  .then(() => console.log("Importer Table Synced Succesfull"))
  .catch((err) => console.log("err:", err));

module.exports = Importer;
