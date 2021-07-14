/*
import mongoose from 'mongoose';
import Book from '../models/book.js';
import User from '../models/user.js';


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
*/
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import sendFirstEmail from "../emails/account.js";
import User from "../models/user.js";
const secret = 'bookstoreapplication';
import SendGrid from '@sendgrid/mail'

import dotenv from 'dotenv';


export const signin = async (req, res) => {
  console.log("Sing in Inititated")
  const { email, password } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    console.log("Password is " + isPasswordCorrect);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
    res.status(200).json({ result: oldUser, token });
    console.log("Sign in Completed!")
  } catch (err) {
    res.status(500).json({ message: "Sign in failed!" });
  }
};


export const signup = async (req, res) => {
  console.log("Sign Up Initiated in the Backend")
  const { email, password, confirmPassword, firstName, lastName, collegeYear, collegeName, major, latitude, longitude} = req.body;
  console.log("Sign Up 1st Line Complete")
  try {
    const oldUser = await User.findOne({ email });
    console.log("Printing the old user" + oldUser)
    if (oldUser) return res.status(400).json({ message: "User already exists." });
    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords didn't match." });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({ email, password: hashedPassword, collegeYear: collegeYear, collegeName: collegeName,  name: `${firstName} ${lastName}`, major: major, latitude: latitude, longitude: longitude });
    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
    res.status(201).json({ result, token });
    console.log("Sign Up was complete")
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
        console.log(error);
  }
}; 

export const updateInformation = async (req, res) => {
  console.log("Update information controller for the users was called.")
  console.log('Request Body from the update information', req.body)
  const {firstName, lastName, email, password, collegeYear, collegeName} = req.body;
  // const potentialPassword = password;
  try{
    const userInfo = await User.findOne({email});
    const {_id, password} = userInfo;
    /*
    if (potentialPassword === ''){
      console.log('Inside the potential password in the updated information')
      password = await bcrypt.hash(potentialPassword, 12);
    }
    */
    const name = firstName + " " + lastName;
    const updatedUser = {email, password, collegeYear, collegeName, name};
    const id = _id;
    console.log("Final information to be sent from updated user ", updatedUser);
    await User.findByIdAndUpdate(id, updatedUser, {new: true});
    const result = await User.findOne({email});
    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } ); 
    res.status(201).json({ result, token });
    console.log("Final stepp in the updated information ", result)
   
  } catch (error){
    console.log("Error was called");
    res.status(400).json({message: "Couldn't update information!"});
  }
}

export const sendMail = async (req, res) =>{
  SendGrid.setApiKey(process.env.SENDGRID_KEY)
  console.log("Request body from the sendMail", req.body)
  const {bookId, receiverName, bookName, authorName, senderName, senderCollege, senderEmail} = req.body;
  /*
  const msg = {
    to: "sjoshi4@ramapo.edu",
      from: "joshishreehar@gmail.com",
      subject: "BookStore Request",
      text:  
      `Dear ${receiverName},
I found your email from the Bookstore application online. I was really interested in the book ${bookName} written by ${authorName}.
Can you please give me your book if you don't need it? My email address is ${senderEmail}.

Sincerely,
${senderName} 
${senderCollege}` 

  };
  await SendGrid.send(msg);
*/
  
  
  res.status(201).json({bookId})
}



export const sendMultipleMails = async (req, res) =>{
  SendGrid.setApiKey(process.env.SENDGRID_KEY)
  console.log("Request body from the sendMultipleMail", req.body)
  // const {bookId, receiverName, bookName, authorName, senderName, senderCollege, senderEmail} = req.body;
  // console.log("Printign the user ID", req.userId)
  const userInfo = await User.findOne({_id: req.userId});
  console.log("Printing the userInfo", userInfo)
  const senderName = userInfo.name;
  const senderCollege = userInfo.collegeName;
  const senderEmail = userInfo.email;
  let listofIds = [];
  const selectedBooks = req.body;
  selectedBooks.map( async (book) =>{
    console.log("Individual books inside the map function", book)
    let bookId = book._id;
    let receiverName = book.provider;
    let bookName = book.name;
    let authorName = book.author;
    let receiverEmail = book.email;
    let msg = {
      to: "sjoshi4@ramapo.edu",
        from: "joshishreehar@gmail.com",
        subject: "BookStore Request",
        text:  
        `Dear ${receiverName},
  I found your email from the Bookstore application online. I was really interested in the book ${bookName} written by ${authorName}.
  Can you please give me your book if you don't need it? My email address is ${senderEmail}.
  
  Sincerely,
  ${senderName} 
  ${senderCollege}`   
  
    };
    // await SendGrid.send(msg);
    await listofIds.push(bookId)
  })
  console.log("Printing the list of Ids in the send multiple mails", listofIds)
  res.status(201).json({listofIds})
}


