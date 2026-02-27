import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";


const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
      type:String,
      required:true,
      minlength:[6,"is should be of 6 characters"]
    },
    role:{
       type:String,
       default:"user",
       enum:["user","organiser"]
    },
    registeredevents:[
        {
            events:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"events"
            }
        }
    ]

},{timestamps:true})

// pre save hook to has a pass before saving
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next;

    try {
        const salt=await bcrypt.genSalt(10);
        this.password=await bcrypt.hash(this.password,salt);
        next();
    } catch (error) {
        next(error)
    }
})

userSchema.methods.iscomparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

const User=mongoose.model("User",userSchema);

export default User;