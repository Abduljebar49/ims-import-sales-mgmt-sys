var express = require("express");
const {
  addUser,
  getUsers,
  getSingleUser,
  Login,
} = require("../controller/user.controller");

const router = express.Router();

router.get("/users", getUsers);
router.post("/user", addUser);
router.post("/user/:id", getSingleUser);
router.post("/login", Login);

module.exports = router;
