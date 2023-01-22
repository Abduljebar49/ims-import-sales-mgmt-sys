const Wholesaler = require("../entity/wholesaler");

const addWholeSaler = async (req, res, next) => {
  const { name, tin_number } = req.body;
  if (!name || !tin_number) {
    defResponse(res, "some field is missing");
    return;
  }
  const data = await Wholesaler.create({ name: name, tin_number: tin_number });
  res.send({
    message: "Successfully created wholesaler",
    data: data,
  });
};

const getWholeSalers = async (req, res, next) => {
  const data = await Wholesaler.findAll();
  res.send({
    message: "Successfully retrieved wholesalers",
    data: data,
  });
};

const getWholeSalerById = async (req, res, next) => {
  const { id } = req.params;
  const data = await Wholesaler.findByPk(id);
  res.send({
    message: "Successfully retrieved wholesaler",
    data: data,
  });
};

const updateWholeSaler = async (req, res, next) => {
  const { id } = req.params;
  const { name, tin_number } = req.body;
  if (!name || !tin_number) {
    defResponse(res, "some field is missing");
    return;
  }
  const data = await Wholesaler.update(
    { name: name, tin_number: tin_number },
    { where: { id: id } }
  );
  res.send({
    message: "Successfully updated wholesaler",
    data: data,
  });
};

const deleteWholeSaler = async (req, res, next) => {
  const { id } = req.params;
  const data = await Wholesaler.destroy({ where: { id: id } });
  res.send({
    message: "Successfully deleted wholesaler",
    data: data,
  });
};

module.exports = {
  addWholeSaler,
  getWholeSalers,
  getWholeSalerById,
  updateWholeSaler,
  deleteWholeSaler,
};
