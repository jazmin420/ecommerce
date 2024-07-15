const User = require('../models/userModel')
const { errorHandler } = require('../utilities/error')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')

//user sign up
exports.signUp = async(req, res, next ) => {
  // validate request body
  const { username, email, password } = req.body;

  if ( !username || !email || !password || username === '' || email === '' || password === '') {
    next(errorHandler(400, "Please add all the fields"))
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password  : hashedPassword,
  })

  try {
    await newUser.save();
    res.status(200).json(newUser)
  } catch (error) {
    next(error);
    
  }
}

exports.signin = async(req, res, next) => {

  const { email, password } = req.body;

  if(!email || !password || email === '' || password === ''){
    next(errorHandler(400, 'All fields are required!!'))
  }

  try {
    //check email and password
    const validUser = await User.findOne({ email})
    if (!validUser) {
      return next(errorHandler(401, 'User not found!!'))
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password)
    if (!validPassword) {
      return next(errorHandler(401, 'Invalid Password!!'))
    }

    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET_KEY );

    //excluding password from sending to client, _doc- mongoose built in property of raw data
    const {password: pass, ...rest} = validUser._doc

    res
    .status(200)
    .cookie('access_token', token, {
      httpOnly: true,
    })
    .json(rest);

  } catch (error) {
    next(error)
   }

}



//user signin