//importing different nodes
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import Book from './book.js';



//structuring the schema of the user database
const userSchema= new mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  collegeYear:{
    type: String,
    required: true,
    trim: true
  },
  collegeName: {
    type: String,
    required: true,
    trim: true
  },
  major:{
    type: String,
    required: true
  },
  email:{
    type:String,
    unique: true,
    required: true,
  },
  password:{
    type: String,
    required: true
  },
  id: {
    type: String
  }
})



//linking two different databases
userSchema.virtual('books',{
  ref:'Book',
  localField:'_id',
  foreignField: 'Owner'
})

/*
//generating authentication token
userSchema.methods.generateAuthToken= async function(){
  const user= this
  const token= jwt.sign({_id:user._id.toString()}, 'thisismyfirstproject')
  user.tokens= user.tokens.concat({token})
  await user.save()
  return token
}

//verifying the login
userSchema.statics.findByCredentials = async (Email, password) => {
    const user = await User.findOne({Email})
    if (!user) {
        throw new Error('Unable to login')
    }
    const isMatch = false
    if(password!==user.Password){
          throw new Error('Unable to login')
    }
    return user
}

//deleting books of user
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar
    return userObject
}
*/

//trying up and exporting
const User= mongoose.model('User', userSchema)
export default User;
