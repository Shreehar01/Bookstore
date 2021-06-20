
//importing different nodes
const mongoose= require('mongoose')
const jwt = require('jsonwebtoken')
const Book= require('./book')



//structuring the schema of the user database
const userSchema= new mongoose.Schema({
  Name:{
    type: String,
    trim: true
  },
  Email:{
    type:String,
   unique: true,
    required: true,
  },
  Year:{
    type: String,
    required: true,
    trim: true
  },
  Housing:{
    type: String
  },
  Password:{
    type:String,
    required: true
},
tokens: [{
      token: {
          type: String
      }
  }],
  avatar:{
    type:Buffer
  }
},{
  timestamps: true
})


//linking two different databases
userSchema.virtual('books',{
  ref:'Book',
  localField:'_id',
  foreignField: 'Owner'
})


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


//trying up and exporting
const User= mongoose.model('User', userSchema)
module.exports=User
