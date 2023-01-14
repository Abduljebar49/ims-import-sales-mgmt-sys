const { Sequelize } = require("sequelize");

const sequalize = new Sequelize("ims", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequalize;
