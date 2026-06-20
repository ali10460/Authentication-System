import jwt from 'jsonwebtoken';
// Generate JWT token
export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '14d' });
};
