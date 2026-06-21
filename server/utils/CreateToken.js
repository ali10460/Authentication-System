import jwt from 'jsonwebtoken';
// Generate JWT token
export const generateToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '14d' });
  res.cookie('token', token);
  return token;
};
