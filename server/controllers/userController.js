// controllers/userController.js

import User from '../models/userModel.js';
import { errorHandler } from '../utilities/error.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

// User sign up
export const signUp = async (req, res, next) => {
  
  const { username, email, password } = req.body;

  if (!username || !email || !password || username === '' || email === '' || password === '') {
    return next(errorHandler(400, 'Please add all the fields'));
  }

  // const userExist = await User.findOne({ $or: [{ username }, { email }] });
  // if (userExist) {
  //   return next(errorHandler(400, 'User already exists'));
  // }

  const hashedPassword = await bcryptjs.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

// User sign in
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    return next(errorHandler(400, 'All fields are required!!'));
  }

  try {
    // Check email and password
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(401, 'User not found!!'));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, 'Invalid Password!!'));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};


//sign out
