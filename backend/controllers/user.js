import mongoose from 'mongoose';
import Book from '../models/book.js';
import User from '../models/user.js';
import sendFirstEmail from '../emails/account.js';



//For creating a new user and logging in(sign up)
export const createUsers = async(req, res)=>{
    const user= new User(req.body)
    try{
     await user.save()
     const token =await user.generateAuthToken()
      res.status(201).send({user, token})
    } catch(e){
      res.status(400).send(e)
    }
}
  
  //For loggin in a user------------------NOT WORKING
export const userLogin = async(req,res)=>{
    try{
      console.log(req.body)
      const user= await User.findByCredentials(req.body.Email, req.body.Password)
      const token= await user.generateAuthToken()
      res.status(200).send({user,token})
    }
    catch(e){
      res.status(400).send(e)
    }
}
  
  //For Updating Information
 export const updateUser = async (req, res) => {
      const updates = Object.keys(req.body)
      const allowedUpdates = ['Housing', 'Year', 'Password']
      const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  
      if (!isValidOperation) {
          return res.status(400).send({ error: 'Invalid updates!' })
      }
  
      try {
          updates.forEach((update) => req.user[update] = req.body[update])
          await req.user.save()
          res.send(req.user)
      } catch (e) {
          res.status(400).send(e)
      }
}
  
  
  
  //for logging out user
export const userLogout = async(req, res)=>{
    try{
    req.user.tokens= req.user.tokens.filter((token)=>{
      return token.token !== req.token
    })
    await req.user.save()
    res.send(req.user)
    }
    catch(e){
      res.status(500).send()
    }
}
  
