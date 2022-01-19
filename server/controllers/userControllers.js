import User from "../models/userModel.js";
import generateToken from "../Utils/generateToken.js";
import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //   res.send({ email, password });
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("invalid Email and password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400).json("User alredy exist !");
  }

  const user = await User.create({ email, name, password });

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json("Invalid User data  !!");
  }
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    res.json("user not found");
  }
});

export { authUser, registerUser, getUserById };
