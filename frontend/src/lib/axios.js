import axios from 'axios'

const axiosinstance=axios.create({
    baseURL: import.meta.env.mode === "development"?"http://localhost:5000/api":"/api",
    withCredentials:true //send cookies to the server
})

export default axiosinstance; 