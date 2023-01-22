var express = require("express");
const {
  getAddress,
  getAddressWithId,
  addAddress,
  updateAddress,
  deleteAddress,
} = require("../controller/address");
const {
  getAdmin,
  getAdminById,
  addAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controller/admin");
const {
  getCompanies,
  getCompany,
  addCompany,
  updateCompany,
  deleteCompany,
} = require("../controller/company");
const {
  getEmployees,
  getEmployeeWithId,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controller/employee");
const {
  getImporters,
  getImporterById,
  addImporter,
  updateImporter,
  deleteImporter,
} = require("../controller/importer");
const {
  getRetailers,
  getRetailerById,
  addRetailer,
  updateRetailer,
  deleteRetailer,
} = require("../controller/retailer");
const {
  getRoles,
  getRole,
  addRole,
  updateRole,
  deleteRole,
} = require("../controller/role");
const {
  getSales,
  getSaleWithId,
  addSales,
  updateSale,
  deleteSale,
} = require("../controller/sales");
const {
  addUser,
  getUsers,
  getSingleUser,
  Login,
} = require("../controller/user.controller");
const {
  getWholeSalers,
  getWholeSalerById,
  addWholeSaler,
  updateWholeSaler,
  deleteWholeSaler,
} = require("../controller/wholesaler");

const router = express.Router();

// address routes

router.get("/addresses", getAddress);
router.get("/address/:id", getAddressWithId);
router.post("/address", addAddress);
router.patch("/address/:id", updateAddress);
router.delete("/address/:id", deleteAddress);

// admin routes

router.get("/admin", getAdmin);
router.get("/admin/:id", getAdminById);
router.post("/admin", addAdmin);
router.patch("/admin/:id", updateAdmin);
router.delete("/admin/:id", deleteAdmin);

// company routes

router.get("/company", getCompanies);
router.get("/company/:id", getCompany);
router.post("/company", addCompany);
router.patch("/company/:id", updateCompany);
router.delete("/company/:id", deleteCompany);

// employee routes

router.get("/employee", getEmployees);
router.get("/employee/:id", getEmployeeWithId);
router.post("/employee", addEmployee);
router.patch("/employee/:id", updateEmployee);
router.delete("/employee/:id", deleteEmployee);

//importer routes

router.get("/importers", getImporters);
router.get("/importer/:id", getImporterById);
router.post("/importer", addImporter);
router.patch("/importer/:id", updateImporter);
router.delete("/importer/:id", deleteImporter);

//retailer routes

router.get("/retailers", getRetailers);
router.get("/retailer/:id", getRetailerById);
router.post("/retailer", addRetailer);
router.patch("/retailer/:id", updateRetailer);
router.delete("/retailer/:id", deleteRetailer);

// role routes

router.get("/roles", getRoles);
router.get("/role/:id", getRole);
router.post("/role", addRole);
router.patch("/role/:id", updateRole);
router.delete("/role/:id", deleteRole);

//sale routes

router.get("/sales", getSales);
router.get("/sales/:id", getSaleWithId);
router.post("/sales", addSales);
router.patch("/sales/:id", updateSale);
router.delete("/sales/:id", deleteSale);

//wholesaler routes

router.get("/wholesalers", getWholeSalers);
router.get("/wholesaler/:id", getWholeSalerById);
router.post("/wholesaler", addWholeSaler);
router.patch("/wholesaler/:id", updateWholeSaler);
router.delete("/wholesaler/:id", deleteWholeSaler);

// router.get("/users", getUsers);
// router.post("/user", addUser);
// router.post("/user/:id", getSingleUser);
// router.post("/login", Login);

module.exports = router;
