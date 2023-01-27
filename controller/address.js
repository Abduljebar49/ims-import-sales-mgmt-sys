const Address = require("../entity/address");
const { defResponse } = require("../function/function");

const addAddress = async (req, res, next) => {
  const { type, value, retailer_id, wholesaler_id, importer_id, sales_id } =
    req.body;

  if (
    !value ||
    !value ||
    !retailer_id ||
    !wholesaler_id ||
    !importer_id ||
    !sales_id
  ) {
    defResponse(res, "some field is required");
    return;
  }

  const data = await Address.create({
    type,
    value,
    retailer_id,
    wholesaler_id,
    importer_id,
    sales_id,
  });

  res.send({
    message: "Successfully created address",
    data,
  });
};

const getAddress = async (req, res, next) => {
  const { id } = req.params;

  const data = await Address.findOne({
    where: {
      id,
    },
  });

  res.send({
    message: "Successfully get address",
    data,
  });
};

const getAddressWithId = async (req, rresnext) => {
  const { id } = req.params;

  const data = await Address.findOne({
    where: {
      id,
    },
  });

  res.send({
    message: "Successfully get address",
    data,
  });
};

const updateAddress = async (req, res, next) => {
  const { id } = req.params;
  const { type, value, retailer_id, wholesaler_id, importer_id, sales_id } =
    req.body;

  if (
    !type ||
    !value ||
    !retailer_id ||
    (!wholesaler_id && !importer_id && !sales_id)
  ) {
    defResponse(res, "some field is required");
    return;
  }
  const data = await Address.findByPk(id);
  if (!data) {
    defResponse(res, "Address not found");
    return;
  }
  await data.update({
    type,
    value,
    retailer_id,
    wholesaler_id,
    importer_id,
    sales_id,
  });
};

const deleteAddress = async (req, res, next) => {
  const { id } = req.params;
  const data = await Address.destroy({
    where: {
      id,
    },
  });
  res.send({
    message: "Successfully deleted address",
    data,
  });
};

module.exports = {
  addAddress,
  getAddress,
  getAddressWithId,
  updateAddress,
  deleteAddress,
};
