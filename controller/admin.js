const Admin = require("../entity/admin");
const { defResponse } = require("../function/function");

const addAdmin = async (req, res, next) => {
  const { first_name, last_name, email, phone_number, code } = req.body;
  if (!first_name || !last_name || !email || !phone_number || !code) {
    defResponse(res, "some field is missing");
    return;
  }
  const data = await Admin.create({
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone_number: phone_number,
    code: code,
  });
  await data.save();
  res.send({
    message: "Admin added successfully",
    data: data,
  });
};

const getAdmin = async (req, res, next) => {
  const data = await Admin.findAll();
  res.send({
    message: "Admins fetched successfully",
    data: data,
  });
};

const getAdminById = async (req, res, next) => {
  const { id } = req.params;
  const data = await Admin.findByPk(id);
  res.send({
    message: "Admin fetched successfully",
    data: data,
  });
};

const updateAdmin = async (req, res, next) => {
  const { id } = req.params;
  const { first_name, last_name, email, phone_number, code } = req.body;
  if (!first_name || !last_name || !email || !phone_number || !code) {
    defResponse(res, "some field is missing");
    return;
  }
  const data = await Admin.findByPk(id);
  if (!data) {
    defResponse(res, "Admin not found");
    return;
  }
  await data.update({
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone_number: phone_number,
    code: code,
  });
  res.send({
    message: "Admin updated successfully",
    data: data,
  })
};

const deleteAdmin = async (req, res, next) => {
  const { id } = req.params;
  const data = await Admin.destroy({
    where: {
      id: id,
    },
  });
  res.send({
    message: "Admin deleted successfully",
    data: data,
  });
};

module.exports = {
  addAdmin,
  getAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};
