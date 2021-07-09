import mongoose from 'mongoose';
import Request from '../models/request.js';
import User from '../models/user.js';
import sendFirstEmail from '../emails/account.js';


export const createRequest = async (req, res) =>{
    console.log("Create Requests was called")
    console.log(req.body);
    const request = req.body;
    const newRequest = new Request({...request});
    console.log("New Request", newRequest);
    console.log("Step called");
    try{
        await newRequest.save();
        console.log("Step2 called");
        console.log("New Request was saved");
        res.status(201).json(newRequest);
    }
    catch (error) {
        console.log("Error was called from the createRequests")
        console.log(error.message);
        res.status(409).json({message: error.message});
    }
}

export const getRequests = async (req, res) =>{
    try{
        console.log("Seeing the request useId from getRequests", req.userId)
        const myrequests = await Request.find({Owner: req.userId});
        console.log('Seeing the myrequests from getRequests', myrequests);
        res.status(200).json({myrequests});
    } catch (error){
        res.status(404).json({message: error.message})
    }
}

export const updateRequest = async (req, res) => {
    const {id} = req.params;
    const {name, author, condition, subject, professor, notes, exam} = req.body;
    const Owner = req.userId;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No request with that id');
    const updatedRequest = {name, author, condition, subject, professor, notes, exam, Owner, _id: id} 
    await Request.findByIdAndUpdate(id, updatedRequest, {new: true});
    const update = await Request.find({_id: id});
    res.status(200).json(updatedRequest);
}
export const deleteRequest = async (req, res) => {
    const {id}  = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    await Request.findByIdAndRemove(id);
    res.json({message: 'Post deleted successfully'});
}
/*



//adding a request
export const createRequest =  async (req,res)=>{
    const request= new Request({
        ...req.body,
        Owner: req.user._id
    })
    // const gamechangers= await User.findOne({_id:request.Owner})
    // const gamechanger= gamechangers.Email
    if(request.ForTaking){
        await request.save()
        const allRequests=await Request.find({ForTaking:false, Subject:request.Subject})
        const idCombination= allRequests.forEach(async function(allRequest){
            let requestowner= await User.findOne({_id:allRequest.Owner})
            //  sendFirstEmail(requestowner, gamechanger,request.Subject, request.Professor)
        })
          res.status(201).send(request)
    }
    else
    {
      const allRequests=await Request.find({ForTaking:true, Subject:request.Subject})
      const idCombination= allRequests.forEach(async function(allRequest){
        let requestowner= await User.findOne({_id:allRequest.Owner})
        //sendFirstEmail( gamechanger,requestowner,request.Subject, request.Professor)
      })
      res.status(201).send(request)
    }
  }
  

//reading all the requests
export const getRequests  =  async(req,res)=>{
    const allrequests= await Request.find({Subject: req.query.Subject})
    res.status(200).send(allrequests)
}
  
  //reading user-specific requests
 export const getUserRequests = async(req,res)=>{
    const allrequests= await Request.find({Owner: req.user._id})
    res.status(200).send(allrequests)
  }
  
  
  
  
  
  // deleting a request
  export const deleteRequests = async (req, res) => {
      try {
          const request = await Request.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
  
          if (!request) {
              res.status(404).send()
          }
  
          res.send(request)
      } catch (e) {
          res.status(500).send()
      }
  }
  
  
  //Updating a request
export const updateRequests = async (req, res) => {
      const updates = Object.keys(req.body)
      const allowedUpdates = ['Subject', 'Professor', 'AdditionalNotes', 'Notes', 'ExamMaterials']
      const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  
      if (!isValidOperation) {
          return res.status(400).send({ error: 'Invalid updates!' })
      }
  
      try {
          const request = await Request.findOne({ _id: req.params.id, Owner: req.user._id})
  
          if (!request) {
              return res.status(404).send()
          } 
          updates.forEach((update) => request[update] = req.body[update])
          await request.save()
          res.send(request)
      } catch (e) {
          res.status(400).send(e)
      }
  }
*/