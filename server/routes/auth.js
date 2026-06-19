import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(404).json({ message: 'Please fill all the fields!' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(404).json('User with this email already exists!');
    }

    const user = await User.create(username, email, password);
    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ massege: 'Server Error!!!' });
  }
});

// Login Route
router.get('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(404).json({ message: 'Please fill all the fields!' });
    }
    const user = User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ massege: 'Invalid Credentials' });
    }
    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ massege: 'Server Error!!!' });
  }
});

// Me Route
// router.get('/me', protect, async (req, res) => {
//   res.status().json(req.user);
// });

export default router;
