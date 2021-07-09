//importing nodes
import mongoose from 'mongoose';
import User from './user.js';



//schema for the requests
const requestSchema= new mongoose.Schema({
  subject:{
    type: String,
    trim: true
  },
  author:{
    type:String,
    trime: true
  },
  professor:{
    type: String,
    trim: true
  },
  name:{
    type: String
  },
  Owner:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})


//tying and exporting the schema
const Request = mongoose.model('Request', requestSchema);
export default Request;

