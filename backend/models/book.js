//importing nodes
import mongoose from 'mongoose';
import User from './user.js';



//schema for the books
const bookSchema= new mongoose.Schema({
  subject:{
    type: String,
    trim: true
  },
  author:{
    type:String,
    trim: true
  },
  professor:{
    type: String,
    trim: true
  },
  condition:{
    type: String,
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

