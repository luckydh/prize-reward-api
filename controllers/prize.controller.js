const { Prize } = require("../models/prize.model");

/**
 * @desc  Register Prize
 */

const prizeRegister = async (req, res, next) => {
  let prizeInfo = req.body;
  try {
    const prize = await new Prize(prizeInfo).save();
    res.status(201).json({
      success: true,
      data: prize,
    });
  } catch (err) {
    console.error(err)
    next(err);
  }
};


/**
 * @desc get all prizes
 */

 const getPrizes = async (req, res, next) => {
    try {
      let prizes = await Prize.find();
      if (prizes.length > 0) {
        return res.status(200).json({
          success: true,
          data: prizes,
        });
      } else {
        return res.status(404).json({
          success: false,
          error: "No prizes to show",
        });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  };
  

  /**
 * @desc get prize by id
 */

const getPrizeById = async (req, res, next) => {
    try {
      const _id = req.params.id;
  
      let prize = await Prize.findById({ _id });

      return res.status(200).json({
        success: true,
        data: prize,
      });

    } catch (err) {
      console.error(err);
      next(err);
    }
  };


  /**
 * @desc reedem Prize
 */

const reedemPrize = async (req, res, next) => {
    try {
      const _id = req.params.id;
  
      let prize = await Prize.findById({ _id });

      if(prize.quantity > 0){
        let count = prize.quantity - 1


        let updatedPrize = await Prize.findByIdAndUpdate(
            { _id },
            { quantity: count },
            { new: true }
        );
        
        return res.status(201).json({
            success: true,
            data: updatedPrize,
        });
      }else{
        return res.status(404).json({
            success: false,
            data: "Out of stock",
        });
      }

    } catch (err) {
      console.log(err);
      next(err);
    }
  };
  
  




module.exports = { prizeRegister, getPrizes, getPrizeById, reedemPrize };