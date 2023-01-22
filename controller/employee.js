const Employee = require("../entity/employee");
const { defResponse } = require("../function/function");

const addEmployee = async (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    code,
    retailer_id,
    importer_id,
    wholesaler_id,
    role_id,
  } = req.body;
  if (
    !first_name ||
    !last_name ||
    !email ||
    !phone_number ||
    !code ||
    !retailer_id ||
    !importer_id ||
    !wholesaler_id ||
    !role_id
  ) {
    defResponse(res, "some field is missing");
    return;
  }

  const data = await Employee.create({
    first_name,
    last_name,
    email,
    phone_number,
    code,
    retailer_id,
    importer_id,
    wholesaler_id,
    role_id,
  });
  res.send({
    message: "Employee added successfully",
    data,
  });
};

const getEmployees = async (req, res) => {
  const data = await Employee.findAll();
  res.send({
    message: "Employees fetched successfully",
    data,
  });
};

const getEmployeeWithId = async (req, res) => {
  const { id } = req.params;
  const data = await Employee.findByPk(id);
  res.send({
    message: "Employee fetched successfully",
    data,
  });
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const {
    first_name,
    last_name,
    email,
    phone_number,
    code,
    retailer_id,
    wholesaler_id,
    importer_id,
    role_id,
  } = req.body;
  if (
    !first_name ||
    !last_name ||
    !email ||
    !phone_number ||
    !code ||
    !retailer_id ||
    !wholesaler_id ||
    !importer_id ||
    !role_id
  ) {
    defResponse(res, "some field is missing");
    return;
  }
  const data = await Employee.update({
    first_name,
    last_name,
    email,
    phone_number,
    code,
    retailer_id,
    wholesaler_id,
    importer_id,
    role_id,
  });
  res.send({
    message: "Employee updated successfully",
    data,
  });
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  const data = await Employee.destroy({
    where: {
      id,
    },
  });
  res.send({
    message: "Employee deleted successfully",
    data,
  });
};

module.exports = {
  addEmployee,
  getEmployees,
  getEmployeeWithId,
  updateEmployee,
  deleteEmployee,
};
