import express from 'express';
import User from '../models/User.js';
import { Me, SignIn, SignUp } from '../controller/auth.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Register Route
router.post('/register', SignUp);

// Login Route
router.get('/', SignIn);

// Me
router.get('/me', protect, Me);

export default router;
