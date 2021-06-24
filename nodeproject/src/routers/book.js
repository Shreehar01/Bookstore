const express= require('express')
const Book = require('../models/book')
const User= require('../models/user')
const {sendFirstEmail} = require('../emails/account')
const auth = require('../middleware/auth')
const router= new express.Router()



//reading all the books
router.get('/books', async(req,res)=>{

  const allbooks= await Book.find({Subject: req.query.Subject})
  res.status(200).send(allbooks)
})

//reading user-specific books
router.get('/books/me', auth, async(req,res)=>{
  const allbooks= await Book.find({Owner: req.user._id})
  res.status(200).send(allbooks)
})


//adding a book
router.post('/books', auth, async (req,res)=>{
    const book= new Book({
      ...req.body,
      Owner: req.user._id
    })
    const gamechangers= await User.findOne({_id:book.Owner})
    const gamechanger= gamechangers.Email
    if(book.ForTaking){
        await book.save()
        const allBooks=await Book.find({ForTaking:false, Subject:book.Subject})
        const idCombination= allBooks.forEach(async function(allBook){
        let bookowner= await User.findOne({_id:allBook.Owner})

        //  sendFirstEmail(bookowner, gamechanger,book.Subject, book.Professor)
        })
        res.status(201).send(book)
  }else{
    const allBooks=await Book.find({ForTaking:true, Subject:book.Subject})
    const idCombination= allBooks.forEach(async function(allBook){
      let bookowner= await User.findOne({_id:allBook.Owner})
      //sendFirstEmail( gamechanger,bookowner,book.Subject, book.Professor)
    })
    res.status(201).send(book)
  }
})




// deleting a book
router.delete('/books/:id', auth, async (req, res) => {
    try {
        const book = await Book.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!book) {
            res.status(404).send()
        }

        res.send(book)
    } catch (e) {
        res.status(500).send()
    }
})


//Updating a book
router.patch('/book/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['Subject', 'Professor', 'AdditionalNotes', 'Notes', 'ExamMaterials']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const book = await Book.findOne({ _id: req.params.id, Owner: req.user._id})

        if (!book) {
            return res.status(404).send()
        }

        updates.forEach((update) => book[update] = req.body[update])
        await book.save()
        res.send(book)
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports= router
