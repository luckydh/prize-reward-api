const jwt = require("jsonwebtoken")
const {config} = require("../config/config")

const checkToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const token = bearerHeader.split(" ")[1];
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({
            success: false,
            data: "Please login to reedem this prize",
        });
      }
      req.profile = decoded;
      next();
    });
  } else {
    return res.status(401).json({
        success: false,
        data: "Please login to reedem this prize",
    });
  }
};

module.exports = checkToken