import axios from 'axios'

const axiosinstance=axios.create({
    baseURL:"https://eventletics-backend.onrender.com/api",
    withCredentials:true //send cookies to the server
})

export default axiosinstance; 

// baseURL: import.meta.env.mode === "development"?"http://localhost:5000/api":"/api",