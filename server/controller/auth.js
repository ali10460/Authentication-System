import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/Createtoken.js';

// Sign Up
export const SignUp = async (req, res) => {

  const { username, email, password } = req.body;
  try {
    const hashpassword = bcrypt.hashSync(password, 10);
    const newuser = await User({
      username,
      email,
      password: hashpassword,
    });

    const token = generateToken(newuser._id, res);
    newuser.token = token;

    await newuser.save();
    if (!newuser) {
      return res
        .status(400)
        .json({ success: false, message: 'You are not registered!' });
    }

    res.json({
      seccess: true,
      message: 'You are successfully registered.',
      data: newuser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Sign In
export const SignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res
        .status(404)
        .json({ success: false, message: 'Please fill all the fields!' });
    }
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ massege: 'Invalid Credentials' });
    }

    const token = generateToken(user._id, res);
    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

// Me
export const Me = async (req, res) => {
  res.status().json(req.user);
};
