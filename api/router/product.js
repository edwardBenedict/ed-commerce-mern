const router = require("express").Router();
const uploadImage = require("../middlewares/uploadImage");
const {
  addProduct,
  getProducts,
  deleteProduct,
  getProduct,
  updateProduct,
} = require("../controllers/product");
const check = require("../middlewares/authentication/check");
require("dotenv").config();

router.get("/", check, getProducts);
router.get("/:id", check, getProduct);
router.delete("/:id", check, deleteProduct);
router.post("/add", check, uploadImage.single("file"), addProduct);
router.put("/:id", check, uploadImage.single("file"), updateProduct);

module.exports = router;
