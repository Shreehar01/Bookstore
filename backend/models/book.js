//importing nodes
import mongoose from 'mongoose';
import User from './user.js';



//schema for the books
const bookSchema= new mongoose.Schema({
  Subject:{
    type: String,
    required: true,
    trim: true
  },
  Professor:{
    type: String,
    required: true,
    trim: true
  },
   Name:{
    type: String
  },
   Edition:{
     type: String
  },
  AdditionalNotes:{
    type:String,
    default: 'No Additional Information!!!'
  },
  ForTaking:{
    type:Boolean,
    required: true
  },
  Owner:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})


//tying and exporting the schema
const Book = mongoose.model('Book', bookSchema);
export default Book;

