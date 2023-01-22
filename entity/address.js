const sequelize = require("sequelize");
const db = require("../db");

const Address = db.define("address", {
  id: {
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    primaryKey: true,
  },
  type: {
    type: sequelize.STRING,
    allowNull: false,
  },
  value: {
    type: sequelize.STRING,
    allowNull: false,
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
      model: "wholesaler",
      key: "id",
    },
  },
  sales_id: {
    type: sequelize.UUID,
    allowNull: false,
    references: {
      model: "sales",
      key: "id",
    },
  },
});

Address.sync()
  .then(() => console.log("Address Table Synced Succesfull"))
  .catch((err) => console.log("err:", err));
module.exports = Address;
