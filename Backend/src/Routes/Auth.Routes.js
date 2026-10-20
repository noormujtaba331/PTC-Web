import {Router} from 'express';
import {register, login, getMe, refreshToken, logout, logoutAll} from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/get-me', getMe);
router.get('/refresh-token', refreshToken);
router.get('/logout', logout);
router.get('/logout-all', logoutAll);

export default router;