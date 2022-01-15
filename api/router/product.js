const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Will be product list!" });
});

module.exports = router;
