const Company = require("../entity/company");
const { defResponse } = require("../function/function");

const addCompany = async (req, res, next) => {
  const { name, log, start_year, tin_number } = req.body;
  if(!name||!log||!start_year||!tin_number){
    defResponse(res,"some fields are missing");
    return;
  }
  const data = await Company.create({ name, log, start_year, tin_number });
  res.send({
    message: "Successfully created company",
    data: data,
  });
};

const getCompanies = async (req, res, next) => {
  const data = await Company.findAll();
  res.send({
    message: "Successfully fetched companies",
    data: data,
  });
};

const getCompany = async (req, res, next) => {
  const { id } = req.params;
  const data = await Company.findByPk(id);
  res.send({
    message: "Successfully fetched company",
    data: data,
  });
};

const updateCompany = async (req, res, next) => {
  const { id } = req.params;
  const { name, log, start_year, tin_number } = req.body;
  if(!name||!log||!start_year||!tin_number){
    defResponse(res,"some fields are missing");
    return;
  }
  const data = await Company.update(
    { name, log, start_year, tin_number },
    { where: { id } }
  );
  res.send({
    message: "Successfully updated company",
    data: data,
  });
};

const deleteCompany = async (req, res, next) => {
  const { id } = req.params;
  const data = await Company.destroy({ where: { id } });
  res.send({
    message: "Successfully deleted company",
    data: data,
  });
};

module.exports = {
  addCompany,
  getCompanies,
  getCompany,
  updateCompany,
  deleteCompany,
}