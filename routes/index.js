const express = require("express");
const prizeRoutes = require("./prize.routes");
const userRoutes = require("./user.routes")

const routes = express.Router();

// prize
routes.use("/prize", prizeRoutes);
// Users
routes.use("/user", userRoutes);

module.exports = routes;