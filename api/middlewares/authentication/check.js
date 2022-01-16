const jwt = require("jsonwebtoken");
require("dotenv").config();

const check = async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, verifiedJwt) => {
      if (error) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        req.user = verifiedJwt;
        next();
      }
    });
  } else {
    res.status(400).send({ message: "Please login to view this page!" });
  }
};

module.exports = check;
