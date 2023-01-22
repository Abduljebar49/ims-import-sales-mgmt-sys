"use strict";
const jwt = require("jsonwebtoken");
const User = require("../entity/user.entity");
module.exports = async (req, res, next) => {
  console.log("inside sign request");
  try {
    console.log("url : ", req.originalUrl);
    if (req.originalUrl === "/api/login") {
      next();
    } else {
      const accessToken = req.cookies["accessToken"];
      const payload = jwt.verify(accessToken, "access_secret");
      if (!payload) {
        return res.status(401).send({
          message: "Unauthenticated",
        });
      }
      const user = await User.findOne({
        where: {
          id: payload.id,
        },
      });
      if (!user) {
        return res.status(401).send({
          message: "Unauthenticated",
        });
      }
      const { password, ...data } = user;
      next();
    }
  } catch (e) {
    console.log("inside catch auth");
    console.log(e);
    return res.status(401).send({
      message: "Unauthenticated",
    });
  }
};
