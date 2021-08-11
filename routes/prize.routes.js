const express = require("express");

const {
 prizeRegister,
 getPrizes,
 getPrizeById,
 reedemPrize,
} = require("../controllers/prize.controller");

const checkToken = require('../middlewares/checkToken')

const router = express.Router();

/**
 * @route  POST /api/prize/
 * @desc   Register Prize
 * @access Public
 */

router.post("/", prizeRegister);


/**
 * @route  GET /api/prize/
 * @desc   Get Prizes
 * @access Public
 */

 router.get("/", getPrizes);


/**
 * @route  GET /api/prize/:id
 * @desc   Get Prize By Id
 * @access Public
 */

 router.get("/:id", getPrizeById);

 /**
 * @route  GET /api/prize/reedem/:id
 * @desc   Reedem Prize By Id
 * @access Public
 */

  router.put("/reedem/:id", checkToken, reedemPrize);


module.exports = router;