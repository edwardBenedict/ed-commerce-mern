const { addProduct } = require("../controllers/product");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Will be product list!" });
});

router.post("/add", addProduct);

module.exports = router;
