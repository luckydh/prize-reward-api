const path = require('path')

const {isEmpty} = require('../helpers/isEmpty')
const { User } = require('../models/user.model')

/**
 * @desc  Register user
 */

const userRegister = async (req, res, next) => {
  let userInfo = req.body;

  let user = await User.find({
    email: userInfo.email,
  });

  if (user.length > 0) {
    return res.status(409).json({
      error: {
        message: "This email address has already been used.",
      },
    });
  }

  // saving to database
  try {
    await new User(userInfo).save();
    res.status(201).json({
      message: "You have been registered successfully.",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

/**
 * @desc Login User
 */

const userLogin = async (req, res, next) => {
  let userInfo = req.body;

  if (isEmpty(userInfo.email) || isEmpty(userInfo.password)) {
    return res.status(400).json({
      error: {
        message: "Email or password field is missing",
      },
    });
  }

  // check if user exits
  let user = await User.findOne({
    email: userInfo.email,
  });

  if (isEmpty(user)) {
    return res.status(404).json({
      error: {
        message: "Invalid email or password.",
      },
    });
  }

  // check is password is correct
  let isMatch = await user.comparePassword(userInfo.password);
  if (!isMatch) {
    return res.status(404).json({
      error: {
        message: "Invalid email or password.",
      },
    });
  }
  try {
    user.password = undefined;
    // generate token
    let userT = await user.generateToken();

    return res.status(200).json({
    success: true,
      data: {
        token: userT.token,
        user: user,
      },
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports =  { userRegister, userLogin };