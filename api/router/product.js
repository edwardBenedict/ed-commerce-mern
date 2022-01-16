const router = require("express").Router();
const {
  addProduct,
  getProducts,
  deleteProduct,
  getProduct,
} = require("../controllers/product");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.post("/add", addProduct);

module.exports = router;
