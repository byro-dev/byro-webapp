const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

// login user
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // check if email and password is provided
  if (!email || !password) {
    return next(
      new ErrorResponse("Please enter a valid email and password", 400)
    );
  }
  try {
    // check if user's email exist already
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid email or password", 401));
    }

    // check if the password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid email or password", 401));
    }

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

// signup user
exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token });
};
