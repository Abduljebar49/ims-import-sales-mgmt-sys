const Sales = require("../entity/sales");

const addSales = async (req, res, next) => {
  const { first_name, last_name, email, phone_number, code } = req.body;
  if (!first_name || !last_name || !email || !phone_number || !code) {
    defResponse(res, "Some fields are missing");
    return;
  }

  const data = await Sales.create({
    first_name,
    last_name,
    email,
    phone_number,
    code,
  });
  res.send({
    message: "Successfully created sale",
    data: data,
  });
};

const getSales = async (req, res, next) => {
  const data = await Sales.findAll();
  res.send({
    message: "Successfully fetched sales",
    data: data,
  });
};

const getSaleWithId = async (req, res, next) => {
  const { id } = req.params;
  const data = await Sales.findByPk(id);
  res.send({
    message: "Successfully fetched sale",
    data: data,
  });
};

const updateSale = async (req, res, next) => {
  const { id } = req.params;
  const { first_name, last_name, email, phone_number, code } = req.body;
  if (!first_name || !last_name || !email || !phone_number || !code) {
    defResponse(res, "Some fields are missing");
    return;
  }
  const data = await Sales.update({
    first_name,
    last_name,
    email,
    phone_number,
    code,
  });
  res.send({
    message: "Successfully updated sale",
    data: data,
  });
};

const deleteSale = async (req, res, next) => {
  const { id } = req.params;
  const data = await Sales.destroy({
    where: {
      id: id,
    },
  });
  res.send({
    message: "Successfully deleted sale",
    data: data,
  });
};

module.exports = {
  addSales,
  getSales,
  getSaleWithId,
  updateSale,
  deleteSale,
};
