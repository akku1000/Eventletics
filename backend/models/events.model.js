import mongoose,{Schema} from "mongoose";


const eventSchema=new Schema({
    title:{
        type:String,
        required:true,
        index:true
    },
    description:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    organiser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],


},{timestamps:true})


const Event=mongoose.model("Event",eventSchema);

export default Event;


