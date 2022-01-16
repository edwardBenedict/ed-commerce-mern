const router = require("express").Router();
const {
  addProduct,
  getProducts,
  deleteProduct,
} = require("../controllers/product");

router.get("/", getProducts);
router.delete("/:id", deleteProduct);
router.post("/add", addProduct);

module.exports = router;
