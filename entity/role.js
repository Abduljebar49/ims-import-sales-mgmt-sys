const sequelize = require("sequelize");
const db = require("../db");

const Role = db.define("roles", {
  id: {
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.STRING,
    allowNull: true,
  },
});

Role.sync()
  .then(() => console.log("Role Table Synced Succesfull"))
  .catch((err) => console.log("err:", err));
module.exports = Role;
