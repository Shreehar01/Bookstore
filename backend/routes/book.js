import express from 'express';
import {getBooks, getUserBooks, createBooks, updateBooks, deleteBooks} from '../controllers/book.js';
import auth from '../middleware/auth.js';

const router = express.Router()


router.get('/books', getBooks);
router.get('/books/me', auth, getUserBooks);
router.post('/books', auth, createBooks);
router.patch('/book/:id', auth, updateBooks);
router.delete('/books/:id', auth, deleteBooks);



export default router;
