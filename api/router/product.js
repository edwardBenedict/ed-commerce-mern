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
router.post(
  "/add",
  // check,
  uploadImage.single("file"),
  addProduct
);
router.put("/:id", check, updateProduct);
// router.post("/upload", uploadImage.single("file"), async (req, res) => {
//   console.log("UPLOAD", req.file);
//   if (req.file === undefined) return res.send("You must select a file.");
//   const imgUrl = `${process.env.HOST_DOMAIN}:${process.env.SERVER_PORT}/file/${req.file.filename}`;
//   return res.send(imgUrl);
// });

module.exports = router;
