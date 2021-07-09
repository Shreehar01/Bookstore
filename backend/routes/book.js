import express from 'express';
import {createBooks, getBooks, updateBook, deleteBook, getAllBooks} from '../controllers/book.js';
import auth from '../middleware/auth.js';

const router = express.Router()


// router.get('/books', getBooks);
// router.get('/books/me', auth, getUserBooks);
// router.post('/books', auth, createBooks);
// router.patch('/book/:id', auth, updateBooks);
// router.delete('/books/:id', auth, deleteBooks);

router.post('/createbook', auth, createBooks);
router.post('/updatebook/:id', auth, updateBook);
router.get('/getbooks', auth, getBooks);
router.get('/getallbooks', auth, getAllBooks);
router.delete('/deletebook/:id', deleteBook);

export default router;
