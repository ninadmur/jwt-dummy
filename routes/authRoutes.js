import express from 'express';
import { postLogin, postSignUp } from '../controller/authController.js';

const router = express.Router();

//SignUp
router.post('/signup', postSignUp);

//Login
router.post('/login', postLogin);

export default router;
