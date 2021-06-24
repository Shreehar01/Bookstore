import express from 'express';
import User from '../models/user.js';
import auth from '../middleware/auth.js';

import {createUsers, userLogin, updateUser, userLogout} from '../controllers/user.js';


const router= express.Router()

router.post('/users', createUsers);
router.post('/users/login', userLogin);
router.patch('/users/me', auth, updateUser);
router.post('/users/logout/me', auth, userLogout);


export default router;