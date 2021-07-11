import mongoose from 'mongoose';
import Book from '../models/book.js';
import User from '../models/user.js';
import sendFirstEmail from '../emails/account.js';


export const createBooks = async (req, res) =>{
    console.log("Create Books was called")
    console.log(req.body);
    const book = req.body;
    const newBook = new Book({...book});
    console.log("New Book", newBook);
    console.log("Step called");
    try{
        await newBook.save();
        console.log("Step2 called");
        console.log("New Book was saved");
        res.status(201).json(newBook);
    }
    catch (error) {
        console.log("Error was called from the createBooks")
        console.log(error.message);
        res.status(409).json({message: error.message});
    }
}

export const getBooks = async (req, res) =>{
    try{
        console.log("Seeing the request useId from getBooks", req.userId)
        const mybooks = await Book.find({Owner: req.userId});
        console.log('Seeing the mybooks from getBooks', mybooks);
        res.status(200).json({mybooks});
    } catch (error){
        res.status(404).json({message: error.message})
    }
}

export const getAllBooks = async (req, res) =>{
    try{
        const {search} = req.params;
        // console.log("Printing req.params", req.params)
        // console.log("Printing the request params in the get all books", search) 
        let books = await Book.find({subject: req.params.search});
        // console.log("Type of the books", typeof(books))
        // console.log('Seeing all the books with the search name in the all books controller', books);
        const someFunction = () => {
            const promises = books.map(async (book) => {
                let ownerInfos = await User.find({_id: book.Owner})      
                return ownerInfos;
                
            });
            return Promise.all(promises);
        }
        let owners = await someFunction();        
        // console.log("Printing the value of k", owners)
        let ownerInfo = []
        owners.map((owner)=>{
            ownerInfo.push(owner[0])
        })
        // console.log("OwnerInfo", ownerInfo)
        let idx = 0;
        let mybooks = []
        books.forEach((book)=>{
            const {notes, exam, _id, name, author, condition, subject, professor, Owner} = book;
            mybooks.push({notes, exam, _id, name, author, condition, subject, professor, Owner, email: ownerInfo[idx].email, provider: ownerInfo[idx].name, college:ownerInfo[idx].collegeName, latitude: ownerInfo[idx].latitude, longitude: ownerInfo[idx].longitude });
            idx++;
        })
        res.status(200).json({mybooks});
    
    } catch (error){
        console.log("Error is being printed")
        console.log("Printing the error", error)

        res.status(404).json({message: error.message})
    }
}

export const updateBook = async (req, res) => {
    const {id} = req.params;
    const {name, author, condition, subject, professor, notes, exam} = req.body;
    const Owner = req.userId;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No book with that id');
    const updatedBook = {name, author, condition, subject, professor, notes, exam, Owner, _id: id} 
    await Book.findByIdAndUpdate(id, updatedBook, {new: true});
    const update = await Book.find({_id: id});
    res.status(200).json(updatedBook);
}
export const deleteBook = async (req, res) => {
    const {id}  = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    await Book.findByIdAndRemove(id);
    res.json({message: 'Post deleted successfully'});
}
/*



//adding a book
export const createBook =  async (req,res)=>{
    const book= new Book({
        ...req.body,
        Owner: req.user._id
    })
    // const gamechangers= await User.findOne({_id:book.Owner})
    // const gamechanger= gamechangers.Email
    if(book.ForTaking){
        await book.save()
        const allBooks=await Book.find({ForTaking:false, Subject:book.Subject})
        const idCombination= allBooks.forEach(async function(allBook){
            let bookowner= await User.findOne({_id:allBook.Owner})
            //  sendFirstEmail(bookowner, gamechanger,book.Subject, book.Professor)
        })
          res.status(201).send(book)
    }
    else
    {
      const allBooks=await Book.find({ForTaking:true, Subject:book.Subject})
      const idCombination= allBooks.forEach(async function(allBook){
        let bookowner= await User.findOne({_id:allBook.Owner})
        //sendFirstEmail( gamechanger,bookowner,book.Subject, book.Professor)
      })
      res.status(201).send(book)
    }
  }
  

//reading all the books
export const getBooks  =  async(req,res)=>{
    const allbooks= await Book.find({Subject: req.query.Subject})
    res.status(200).send(allbooks)
}
  
  //reading user-specific books
 export const getUserBooks = async(req,res)=>{
    const allbooks= await Book.find({Owner: req.user._id})
    res.status(200).send(allbooks)
  }
  
  
  
  
  
  // deleting a book
  export const deleteBooks = async (req, res) => {
      try {
          const book = await Book.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
  
          if (!book) {
              res.status(404).send()
          }
  
          res.send(book)
      } catch (e) {
          res.status(500).send()
      }
  }
  
  
  //Updating a book
export const updateBooks = async (req, res) => {
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
  }
*/