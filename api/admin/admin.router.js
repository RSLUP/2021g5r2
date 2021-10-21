const {
  createAdmin,
  getAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  loginAdmin,
} = require("./admin.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createAdmin);
router.get("/", checkToken, getAdmin);
router.get("/:id", checkToken, getAdminById);
router.patch("/", checkToken, updateAdmin);
router.delete("/", checkToken, deleteAdmin);
router.post("/login", loginAdmin);

module.exports = router;
