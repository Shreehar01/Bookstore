import express from 'express';
// import User from '../models/user.js';

import { signin, signup, updateInformation, sendMail, sendMultipleMails} from '../controllers/user.js';
import auth from '../middleware/auth.js';


const router= express.Router()

router.post('/signin', signin);
router.post('/signup', signup);
// router.patch('/me', auth, updateUser);
// router.post('/users/logout/me', auth, userLogout);
router.patch('/updateinformation', updateInformation);
router.post('/sendmail', sendMail);
router.post('/sendmultiplemails', auth, sendMultipleMails);

export default router;

