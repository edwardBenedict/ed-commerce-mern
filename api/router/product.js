const router = require("express").Router();
const {
  addProduct,
  getProducts,
  deleteProduct,
  getProduct,
} = require("../controllers/product");
const check = require("../middlewares/authentication/check");

router.get("/", check, getProducts);
router.get("/:id", check, getProduct);
router.delete("/:id", check, deleteProduct);
router.post("/add", check, addProduct);

module.exports = router;
