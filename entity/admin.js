const sequelize = require("sequelize");
const db = require("../db");

const Admin = db.define("admin", {
  id: {
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    primaryKey: true,
  },
  first_name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
  },
  phone_number: {
    type: sequelize.STRING,
    allowNull: false,
  },
  active: {
    type: sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  code: {
    type: sequelize.STRING,
    allowNull: false,
  },
  activatedAt: {
    type: sequelize.DATE,
    allowNull: true,
  },
  is_super_admin: {
    type: sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Admin.sync()
  .then(() => console.log("Admin Table Synced Succesfull"))
  .catch((err) => console.log("err:", err));
module.exports = Admin;
