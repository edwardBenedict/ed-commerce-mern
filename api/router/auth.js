const router = require("express").Router();

router.post("/login", (req, res) => {
  // console.log("REQBODY", req.body);
  res.status(200).json({ message: "You've logged in successfully!" });
});

router.post("/register", (req, res) => {
  console.log("REQBODY", req.body);
  res.status(200).json({ message: "You've registered in successfully!" });
});

module.exports = router;
