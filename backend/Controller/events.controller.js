import { Apierror } from "../utils/apierror.js";
import Event from "../models/events.model.js";
import User from "../models/user.model.js";

const getallevents=async(req,res)=>{
   try {
     const events=await Event.find({});
   //   console.log(events)
     res.json(events)
   } catch (error) {
      throw new Apierror(500,error.message)
   }
}

const registerevent=async(req,res)=>{
  try {
   const event=await Event.findById(req.params.id);
   const user=await User.findById(req.user._id);
   if(!event){
     throw new Apierror(404,"event not found");
   }
   if(event.participants.includes(req.user._id.toString())){
     throw new Apierror(400,"already registered");
   }
   event.participants.push(req.user._id);
   user.registeredevents.push(event._id);
   await user.save();
   await event.save();
   res.json({message:"registered successfully"})

  } catch (error) {
   throw new Apierror(500,error.message)
  }
}

const getorgevents=async(req,res)=>{ 
   try {
      const events=await Event.findById({organizer:req.user._id}).
      sort({createdAt:-1});
      res.json(events)
   } catch (error) {
      throw new Apierror(500,error.message)
   }

}

const createEvent=async(req,res)=>{
   try {
      const {title,description,date,location}=req.body;
      console.log(req.body)
      if(!title||!description||!date||!location){
         throw new Apierror(400,"please enter all the fields in event")
      }
      const event=await Event.create({
        title,
        description,
        date,
        location,
        organiser:req.user._id
      })
         res.status(201).json("event is created successfully:",event)
   } catch (error) {
      throw new Apierror(500,error.message)
   }
}


const deleteEvent=async(req,res)=>{
   try {
      const event=await Event.findById(req.params.id);
      if(!event){
         throw new Apierror(404,"event not found");
      }
      console.log(event.organiser,req.user._id);
      if(event.organiser.toString()!==req.user._id.toString()){
         return res.status(403).json({message:"you are not authorized to delete this event"})
      }
      await Event.findByIdAndDelete(req.params.id);
      res.json({message:"event deleted successfully"})
   } catch (error) {
      throw new Apierror(500,error.message)
   }
}

const geteventbysearch=async(req,res)=>{
   try {
      console.log(req.query.search)
      const search=req.query?.search||"";
      const event=await Event.find({
         title:{$regex:search,$options:"i"}
      })
      res.json(event)
   } catch (error) {
      throw new Apierror(500,error.message)
   }
}


const unregisterevent=async(req,res)=>{
  try {
   const event=await Event.findById(req.params.id);
   const user=await User.findById(req.user._id);
   if(!event){
     throw new Apierror(404,"event not found");
   }
   event.participants=event.participants.filter((id)=>id.toString()!==req.user._id.toString());
   user.registeredevents=user.registeredevents.filter((id)=>id.toString()!==event._id.toString());
   await user.save();
   await event.save();
   res.json({message:"unregistered successfully"})

  } catch (error) {
   throw new Apierror(500,error.message)
  }
}

export {getallevents,getorgevents,createEvent,deleteEvent,geteventbysearch,registerevent,unregisterevent}