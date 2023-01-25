const sequelize = require("sequelize");
const db = require("../db");

const Employee = db.define("employees", {
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
  retailer_id: {
    type: sequelize.UUID,
    allowNull: false,
    references: {
      model: "retailers",
      key: "id",
    },
  },
  importer_id: {
    type: sequelize.UUID,
    allowNull: false,
    references: {
      model: "importers",
      key: "id",
    },
  },
  wholesaler_id: {
    type: sequelize.UUID,
    allowNull: false,
    references: {
      model: "wholesalers",
      key: "id",
    },
  },
  role_id: {
    type: sequelize.UUID,
    allowNull: false,
    references: {
      model: "roles",
      key: "id",
    },
  },
});

Employee.sync()
  .then(() => console.log("Employee Table Synced Succesfull"))
  .catch((err) => console.log("err:", err));
module.exports = Employee;
