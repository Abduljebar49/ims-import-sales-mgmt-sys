const sequelize = require("sequelize");
const db = require("../db");

const User = db.define(
  "users",
  {
    id: {
      type: sequelize.UUID,
      defaultValue: sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: sequelize.STRING,
      allowNull: true,
      unique:true,
    },
    phone: {
      type: sequelize.STRING,
      allowNull: false,
      unique:true,
    },
    role: {
      type: sequelize.ENUM,
      values: ["user", "admin"],
      allowNull: false,
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
    //   beforeCreate: async (user) => {
    //     if (user.password) {
    //       const salt = await bcrypt.genSaltSync(10, "a");
    //       user.password = bcrypt.hashSync(user.password, salt);
    //     }
    //   },
    //   beforeUpdate: async (user) => {
    //     if (user.password) {
    //       const salt = await bcrypt.genSaltSync(10, "a");
    //       user.password = bcrypt.hashSync(user.password, salt);
    //     }
    //   },
    // },
    // instanceMethods: {
    //   validPassword: (password) => {
    //     console.log("password : ", password);
    //     return bcrypt.compareSync(password, this.password);
    //   },
    },
  }
);

User.sync()
  .then(() => console.log("Synced Succesfull"))
  .catch((err) => console.log("err:", err));
module.exports = User;
