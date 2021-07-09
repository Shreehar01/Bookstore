import express from 'express';
import {createRequest, getRequests, updateRequest, deleteRequest} from '../controllers/request.js';
import auth from '../middleware/auth.js';

const router = express.Router()


// router.get('/requests', getRequests);
// router.get('/requests/me', auth, getUserRequests);
// router.post('/requests', auth, createRequests);
// router.patch('/request/:id', auth, updateRequests);
// router.delete('/requests/:id', auth, deleteRequests);

router.post('/createrequest', auth, createRequest);
router.post('/updaterequest/:id', auth, updateRequest);
router.get('/getrequests', auth, getRequests);
router.delete('/deleterequest/:id', deleteRequest);

export default router;
