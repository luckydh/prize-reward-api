const express = require("express");

const  {
  userLogin,
  userRegister,
} = require("../controllers/user.controller")

const router = express.Router();

/**
 * @route  POST /api/users/register
 * @desc   Register user
 * @access Public
 */

router.post("/register", userRegister);

/**
 * @route  POST /api/users/login
 * @desc   Login user
 * @access Public
 */
router.post("/login", userLogin);

module.exports = router;
