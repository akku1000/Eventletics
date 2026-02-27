import {create} from "zustand"
import axios from "../lib/axios"
import {toast} from "react-hot-toast"

export const userstore=create((set,get)=>({
    user:null,
    loading:false,
    checkingAuth:true,
    event:[],

signup:async({name,email,password,confirmpassword,role})=>{
     set({loading:true})
    //console.log(name,email,password,confirmpassword);
    console.log(role)
     if(password!==confirmpassword){
        set({loading:false})
        return toast.error("Passwords do not match")
    }
    try {
        const res=await axios.post('/auth/signup',{name,email,password,role},{withCredentials:true});
        //console.log(res)
        set({user:res.data,loading:false});
    } catch (error) {
        set({loading:false})
        return toast.error(error.response.data.message)
    }
 },
 login:async(email,password,role)=>{
     set({loading:true})
    //console.log(name,email,password,confirmpassword);
    console.log(role)
    try {
        const res=await axios.post('/auth/login',{email,password,role},{withCredentials:true});
        // console.log(res.data.role)
        set({user:res.data,loading:false});
    } catch (error) {
        set({loading:false})
        return toast.error(error.response.data.message)
    }
 },
 checkAuth:async()=>{
    set({checkingAuth:true})
     try {
        const res=await axios.get("/auth/refresh-token");
        //console.log(res)
        const profile=await axios.get("/auth/profile",{withCredentials:true});
        //console.log(res)
        set({user:profile.data,checkingAuth:false});
     } catch (error) {
        set({user:null,checkingAuth:false});
     }
 },
 logout:async()=>{
     try{
        await axios.post("/auth/logout");
        set({user:null})
     }
     catch(error){
       toast.error(error.response.data.message||"error in logout")
     
     }
 },
 createevent:async({title,description,date,location})=>{
         set({loading:true})
         try {
            const res=await axios.post("/events/createevent",{title,description,date,location},{withCredentials:true});
            //set({event:res.data,loading:false})
            //console.log(res.data)
            return toast.success(res.data)
         } catch (error) {
           set({loading:false})
           return toast.error(error.response.data.message)
         }
 },
allevent:async()=>{
    try {
        const res=await axios.get("/events/getall");
        // console.log(res.data)
        set({event:res.data})
        //console.log(event[0])
    } catch (error) {
        console.log("error in getall")
    }
},
registerevent:async(eventid)=>{
    // console.log(eventid)
    try {
        const res=await axios.post(`/events/register/${eventid}`,{withCredentials:true})
        toast.success(res.data.message)
         set((state) => ({
      event: state.event.map((ev) =>
        ev._id === eventid
          ? { ...ev, participants: [...ev.participants, state.user._id] }
          : ev
      ),
    }));
       // console.log(res)
    } catch (error) {
        toast.error(error.response.data.message)
    }
},unregister:async(eventid)=>{
    try {
        const res=await axios.post(`/events/unregister/${eventid}`,{withCredentials:true});
        toast.success(res.data.message)
        set((state) => ({
      event: state.event.map((ev) =>
        ev._id === eventid
          ? {
              ...ev,
              participants: ev.participants.filter(
                (id) => id.toString() !== state.user._id.toString()
              ),
            }
          : ev
      ),
    }));
    } catch (error) {
        toast.error(error.response.data.message)
    }
},
deleteevent:async(eventid)=>{
     try {
        const res=await axios.delete(`/events/deleteEvent/${eventid}`,{withCredentials:true});
        toast.success(res.data.message)
     } catch (error) {
         toast.error(error.response.data.message)
     }
},
searchevent:async(searchQuery)=>{
  try {
    //console.log(searchQuery)
    const res=await axios.get(`/events/searchevent?search=${searchQuery}`);
    set({event:res.data})
  } catch (error) {
    toast.error(error.response.data.message)
  }
}

}))

//refresh token -so that whenever access token expire
// then refresh token itself from frontend loged in user and give new refresh token