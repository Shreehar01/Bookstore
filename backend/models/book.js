//importing nodes
import mongoose from 'mongoose';
import User from './user.js';



//schema for the books
const bookSchema= new mongoose.Schema({
  subject:{
    type: String,
    required: true,
    trim: true
  },
  professor:{
    type: String,
    required: true,
    trim: true
  },
  condition:{
    type: String,
    required: true,
    trim: true
  },
  name:{
    type: String
  },
  notes:{
    type:String,
    default: 'No Additional Information!!!'
  },
  exam:{
    type:String,
    default: 'No Additional Information!!!'
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

