import { Apierror } from "../utils/apierror.js";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import  User  from "../models/user.model.js";
dotenv.config()

const protectRoute=async(req,res,next)=>{
    try {
         const accessToken=req.cookies.accessToken;
        // console.log(accessToken)
         if(!accessToken){
            throw new Apierror(401,"Unauthorized-no acess token is there");
         }

         try {
            const decoded=jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
           // console.log(decoded)
            const user=await User.findById(decoded.userid).select("-password");
            req.user=user;
            //console.log(req.user)
            next();
         } catch (error) {
            if(error.name==="TokenExpiredError"){
                throw new Apierror(401,"Unauthorized-token expired");
            }
            throw error;
         }
    } catch (error) {
        throw new Apierror(500,error.message)
    
    }
}

const adminRoute=async(req,res,next)=>{

        if(req.user&&req.user.role==="organiser"){
            next();
        }
        else{
            throw new Apierror(403,"Unauthorized-admin")
        }
   
}
export {protectRoute,adminRoute}