import User from '../modals/User.js';
import jwt from 'jsonwebtoken';

const createToken = id => {
  const token = jwt.sign({ id }, process.env.JWT_KEY);
  return token;
};

export const postSignUp = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = createToken(user._id);
    res.json({ user, token });
  } catch (err) {
    res.send(err);
  }
};

export const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.login(email, password);
  const token = createToken(user._id);
  res.json({ user, token });
};
