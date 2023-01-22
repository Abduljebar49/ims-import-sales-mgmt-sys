const Retailer = require("../entity/retailer");

const addRetailer = async (req, res, next) => {
  const { name, tin_number } = req.body;
  if (!name || !tin_number) {
    defResponse(res, "some field is missing");
    return;
  }
  const data = await Retailer.create({ name: name, tin_number: tin_number });
  res.send({
    message: "Successfully created retailer",
    data: data,
  });
};

const getRetailers = async (req, res, next) => {
  const data = await Retailer.findAll();
  res.send({
    message: "Successfully retrieved retailers",
    data: data,
  });
};

const getRetailerById = async (req, res, next) => {
  const { id } = req.params;
  const data = await Retailer.findByPk(id);
  res.send({
    message: "Successfully retrieved retailer",
    data: data,
  });
};

const updateRetailer = async (req, res, next) => {
  const { id } = req.params;
  const { name, tin_number } = req.body;
  if (!name || !tin_number) {
    defResponse(res, "some field is missing");
    return;
  }
  const data = await Retailer.update(
    { name: name, tin_number: tin_number },
    { where: { id: id } }
  );
  res.send({
    message: "Successfully updated retailer",
    data: data,
  });
};

const deleteRetailer = async (req, res, next) => {
  const { id } = req.params;
  const data = await Retailer.destroy({ where: { id: id } });
  res.send({
    message: "Successfully deleted retailer",
    data: data,
  });
};

module.exports = {
  addRetailer,
  getRetailers,
  getRetailerById,
  updateRetailer,
  deleteRetailer,
};
