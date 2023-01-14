const User = require("../entity/user.entity");
const bcrypt = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");

const userRole = [
  {
    name: "Admin",
    value: "ADMIN",
  },
  {
    name: "Sales",
    value: "sales",
  },
];

const addUser = async (req, res, next) => {
  try {
    const { name, phone, email, password, role } = req.body;
    var hPassword = "";
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    hPassword = hashedPassword;

    User.create({
      name: name,
      phone: phone,
      email: email,
      password: hPassword,
      role: role,
    }).then((result) => {
      const data = result.get({ plain: true });
      const newRes = {
        ...data,
        password: undefined,
      };
      res.send({
        message: "User Successfully Saved",
        data: newRes,
      });
    });
  } catch (er) {
    console.log("er : ", er);
    res.send(er);
  }
};

const getRoles = (req, res, next) => {
  try {
    res.send(userRole);
  } catch (er) {
    console.log("er : ", er);
    res.send(er);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    users = {...users,password: undefined}
    res.json(users);
  } catch (er) {
    console.log("er : ", er);
    res.send(er);
  }
};

const deleteUsers = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.destroy({
      where: {
        id: id,
      },
    });

    res.send({
      message: "Deleted Successfully",
      data: data,
    });
  } catch (er) {
    console.log("er : ", er);
    res.send(er);
  }
};

const getSingleUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({
      where: {
        id: id,
      },
    });
    res.json(data);
  } catch (er) {
    console.log("er : ", er);
    res.send(er);
  }
};

const Login = (async = async (req, res) => {
  console.log("inside login function");
  try {
    const { phone, password } = req.body;
    console.log("login : ", phone, password);
    const user = await User.findOne({
      // `id`, `name`, `email`, `phone`, `role`, `createdAt`, `updatedAt`
      // attributes: ["phone", "id", "name", "email", "role"],
      where: {
        phone: phone,
      },
    });

    console.log("user : ",user);
    if (!user) {
      res.status(400).send({
        message: "Invalid Credentials",
      });
      return;
    }

    if (!(await bcrypt.compare(password, user.password))) {
      res.status(400).send({
        message: "Invalid Credentials",
      });
      return;
    }

    const accessToken = sign(
      {
        id: user.id,
      },
      "access_secret",
      { expiresIn: 60 * 60 }
    );

    const refreshToken = sign({ id: user.id }, "refresh_secret", {
      expiresIn: 24 * 60 * 60,
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, //equivalent to 1 day
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, //equivalent to 7 days
    });
    console.log(req.cookies);
    const respnose = {...user.get({plain: true}),password:undefined}
    res.send({
      message: "success",
      user: respnose,
    });
  } catch (er) {
    console.log("er : ", er);
    res.send(er);
  }
});

const AuthenticatedUser = async (req, res, next) => {
  try {
    console.log(req.cookies);
    const accessToken = req.cookies["accessToken"];

    const payload = verify(accessToken, "access_secret");

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
  } catch (e) {
    console.log(e);
    return res.status(401).send({
      message: "Unauthenticated",
    });
  }
};

module.exports = {
  getRoles,
  getUsers,
  deleteUsers,
  getSingleUser,
  Login,
  AuthenticatedUser,
  addUser,
};
