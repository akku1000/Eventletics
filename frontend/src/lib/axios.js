import axios from 'axios'

const axiosinstance=axios.create({
    baseURL: import.meta.env.mode === "development"?"http://localhost:5000/api":"https://eventletics-backend.onrender.com/api",
    withCredentials:true //send cookies to the server
})

export default axiosinstance; 