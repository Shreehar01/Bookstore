import express from 'express';
// import User from '../models/user.js';

import { signin, signup, updateInformation, sendMail } from '../controllers/user.js';

const router= express.Router()

router.post('/signin', signin);
router.post('/signup', signup);
// router.patch('/me', auth, updateUser);
// router.post('/users/logout/me', auth, userLogout);
router.patch('/updateinformation', updateInformation);
router.post('/sendmail', sendMail);


export default router;

