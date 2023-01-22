const Importer = require("../entity/importer");
const { defResponse } = require("../function/function");

const addImporter = async (req, res, next) => {
  const { name, tin_number } = req.body;
  if (!name || !tin_number) {
    defResponse(res, "some field is missing");
    return;
  }
  const data = await Importer.create({ name: name, tin_number: tin_number });
  res.send({
    message: "Successfully created importer",
    data: data,
  });
};

const getImporters = async (req, res, next) => {
  const data = await Importer.findAll();
  res.send({
    message: "Successfully retrieved importers",
    data: data,
  });
};

const getImporterById = async (req, res, next) => {
  const { id } = req.params;
  const data = await Importer.findByPk(id);
  res.send({
    message: "Successfully retrieved importer",
    data: data,
  });
};

const updateImporter = async (req, res, next) => {
  const { id } = req.params;
  const { name, tin_number } = req.body;
  if (!name || !tin_number) {
    defResponse(res, "some field is missing");
    return;
  }

  const data = await Importer.update(
    { name: name, tin_number: tin_number },
    { where: { id: id } }
  );
  res.send({
    message: "Successfully updated importer",
    data: data,
  });
};

const deleteImporter = async (req, res, next) => {
  const { id } = req.params;
  const data = await Importer.destroy({ where: { id: id } });
  res.send({
    message: "Successfully deleted importer",
    data: data,
  });
};

module.exports = {
  addImporter,
  getImporters,
  getImporterById,
  updateImporter,
  deleteImporter,
};
